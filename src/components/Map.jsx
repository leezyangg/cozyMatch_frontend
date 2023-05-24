import { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Icon, Style } from 'ol/style';

export default function MapComponent() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Create a map instance
    const map = new Map({
      target: mapContainerRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    // Create a vector layer and source for the marker
    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });
    map.addLayer(vectorLayer);

    // Get the current live location
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Create a marker feature
          const markerFeature = new Feature({
            geometry: new Point(fromLonLat([longitude, latitude])),
          });

          // Create a style for the marker
          const markerStyle = new Style({
            image: new Icon({
              anchor: [0.5, 1],
              src: '/src/assets/pinCurrent.png', // Replace with the correct path to your pinCurrent.png icon
            }),
          });

          // Set the style for the marker feature
          markerFeature.setStyle(markerStyle);

          // Add the marker feature to the vector source
          vectorSource.addFeature(markerFeature);

          // Center the map to the marker's location
          map.getView().setCenter(fromLonLat([longitude, latitude]));

          // Zoom to the marker's location
          map.getView().setZoom(15);
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }

    // Clean up the map instance on component unmount
    return () => {
      map.setTarget(null);
    };
  }, []);

  return <div ref={mapContainerRef} style={{ width: '50%', height: '400px' }}></div>;
}
