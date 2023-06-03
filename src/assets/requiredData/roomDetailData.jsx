import axios from 'axios';
import { useEffect, useState } from 'react';

function roomDetailData() {
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

export default roomDetailData;
/*export default [
    {
        id: o,
        img: "src/assets/room.jpg",
        propertyName: "Block 1 Flat Sri Serdang",
        address: "Taman Sri Serdang, Sri Kembangan, Selangor",
        type: "Condominium",
        rentalFee: 1300,
        bedroom: 5,
        bathroom: 5,
        parking: 5,
        availability: true,
    },
    {
        id: 2,
        img: "src/assets/room.jpg",
        address: "No 32, Jalan Bukit Serdang, Taman Bukit Serdang, 43400 Serdang Selangor",
        type: "Condominium",
        rentalFee: 1500,
        bedroom: 3,
        bathroom: 1,
        parking: 3,
        availability: false,
    },
    {
        id: 3,
        img: "src/assets/room.jpg",
        propertyName: "Block 1 Flat Sri Serdang",
        address: "Taman Sri Serdang, Sri Kembangan, Selangor",
        type: "Condominium",
        rentalFee: 1300,
        bedroom: 5,
        bathroom: 5,
        parking: 5,
        availability: true,
    },
    {
        id: 4,
        img: "src/assets/room.jpg",
        address: "No 32, Jalan Bukit Serdang, Taman Bukit Serdang, 43400 Serdang Selangor",
        type: "Condominium",
        rentalFee: 1500,
        bedroom: 3,
        bathroom: 1,
        parking: 3,
        availability: false,
    },
    {
        id: 5,
        img: "src/assets/room.jpg",
        propertyName: "Block 1 Flat Sri Serdang",
        address: "Taman Sri Serdang, Sri Kembangan, Selangor",
        type: "Condominium",
        rentalFee: 1300,
        bedroom: 5,
        bathroom: 5,
        parking: 5,
        availability: true,
    },
    {
        id: 6,
        img: "src/assets/room.jpg",
        address: "No 32, Jalan Bukit Serdang, Taman Bukit Serdang, 43400 Serdang Selangor",
        type: "Condominium",
        rentalFee: 1500,
        bedroom: 3,
        bathroom: 1,
        parking: 3,
        availability: false,
    },
]*/