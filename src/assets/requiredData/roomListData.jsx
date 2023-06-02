import axios from 'axios';
import { useEffect, useState } from 'react';

function roomListings() {
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

    return rooms;
}

export default roomListings;
