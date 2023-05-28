import { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { Text, Fill } from 'ol/style';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Icon, Style } from 'ol/style';
import listedroom from "../assets/requiredData/roomListData";

// Function to convert address to coordinates using OpenStreetMap Nominatim API
async function geocodeAddress(address) {
  const encodedAddress = encodeURIComponent(address);
  const url = `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=json`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (Array.isArray(data) && data.length > 0) {
      const { lat, lon } = data[0];
      return [parseFloat(lon), parseFloat(lat)]; // Return coordinates as [longitude, latitude]
    } else {
      throw new Error('Unable to geocode the address.');
    }
  } catch (error) {
    console.error('Error geocoding address:', error);
    throw error;
  }
}

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

    // Create a vector layer and source for the markers
    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });
    map.addLayer(vectorLayer);

    // Get the current live location
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          // Create a marker feature for the current location
          const currentLocationFeature = new Feature({
            geometry: new Point(fromLonLat([longitude, latitude])),
          });

          // Create a style for the current location marker
          const currentLocationStyle = new Style({
            image: new Icon({
              anchor: [0.5, 1],
              src: '/src/assets/pinCurrent.png', // Replace with the correct path to your pinCurrent.png icon
            }),
          });

          // Set the style for the current location marker feature
          currentLocationFeature.setStyle(currentLocationStyle);

          // Add the current location marker feature to the vector source
          vectorSource.addFeature(currentLocationFeature);

          // Loop through the room details and create marker features for each room
          for (const room of listedroom) {
            const { address, rentalFee } = room;

            try {
              // Convert address to coordinates
              const coordinates = await geocodeAddress(address);

              // Create a marker feature for the room
              const roomFeature = new Feature({
                geometry: new Point(fromLonLat(coordinates)),
              });

             // Create a style for the room marker
                const roomStyle = new Style({
                  image: new Icon({
                    anchor: [0.5, 1],
                    src: '/src/assets/pinRoom.png', // Replace with the correct path to your pinRoom.png icon
                    scale: [0.3,0.2],
                    imgSize: [20, 10],
                    offset: [0, -25], // Move the image slightly upwards
                  }),
                  text: new Text({
                    text: `RM${rentalFee}`, // Display the room price as text
                    font: 'bold 12px Arial',
                    textAlign: 'center',    // Set text alignment to center
                    textBaseline: 'middle', // Set text baseline to middle
                    fill: new Fill({        // Define fill color
                      color: '#ffffff',     // Set the rentalFee text color
                    }),
                    offsetY: -20, // Move the text slightly upwards
                  }),
                });

              // Set the style for the room marker feature
              roomFeature.setStyle(roomStyle);

              // Add the room marker feature to the vector source
              vectorSource.addFeature(roomFeature);
            } catch (error) {
              console.error(`Error geocoding address "${address}":`, error);
            }
          }

          // Center the map to the current location
          map.getView().setCenter(fromLonLat([longitude, latitude]));

          // Zoom to the current location
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

  return <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }}></div>;
}
