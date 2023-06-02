import axios from 'axios';

function roomListings() {
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
}