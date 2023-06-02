import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RoomInfoCard from '../components/RoomInfoCard';
import { HiLocationMarker } from 'react-icons/hi';


function RoomListing() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        // Fetch room listings from backend
        axios.get('http://localhost:3000/room')
            .then(response => {
                setRooms(response.data);
            })
            .catch(error => {
                console.error('Error fetching room listings:', error);
            });
    }, []);

    const listedRoomCard = rooms.map(listedRoom => (
        <RoomInfoCard
            key={listedRoom.id}
            {...listedRoom}
        />
    ));

    return (
        <div>
            <h2 className="mx-20 font-bold text-2xl">Room Listing</h2>
            <div className="flex mx-20 mt-3 mb-5 items-center">
                <HiLocationMarker size={20} />
                <h3>Taman Serdang Java, Sri Kembangan, Selangor</h3>
            </div>
            <div className="space-y-7">
                {listedRoomCard}
            </div>
        </div>
    );
}

export default RoomListing;
