
import { useEffect, useState } from 'react';
import RoommateInfoCard from '../components/RoommateInfoCard';

export default function RoommateMatching() {
    const [roommates, setRoommates] = useState(null);

    useEffect(() => {
        const fetchRoommates = async () => {
            const response = await fetch('http://localhost:3000/api/roommates');
            const json = await response.json();

            if (response.ok) {
                setRoommates(json);
            }
        };

        fetchRoommates();
    }, []);


    return (
        <div className="roommate-matching">
            <div className="grid gap-10 grid-cols-5 grid-rows-2 px-10">
                {roommates &&
                    roommates.map((roommate) => (
                        <RoommateInfoCard key={roommate._id} roommate={roommate} />
                    ))}
            </div>
        </div>
    );
}
