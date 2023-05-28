import { useParams } from 'react-router-dom';
import { HiLocationMarker } from 'react-icons/hi';
import { BiBed, BiBath } from 'react-icons/bi';
import { AiOutlineCar, AiFillStar } from 'react-icons/ai';

export default function RoomDetail() {
    // Retrieve the roomId from the URL parameters
    const { roomId } = useParams();

    // Fetch room details or use the roomId to display relevant information
    // const fetchRoomDetails = async () => {
    //     try {
    //       // Make an API call or fetch room data from your data source
    //       const response = await fetch(`/api/rooms/${roomId}`);
    //       const roomData = await response.json();

    //       // Process the roomData and update the component state or render the details directly
    //       console.log(roomData);
    //     } catch (error) {
    //       console.error('Error fetching room details:', error);
    //     }
    //   };

    // Call the fetchRoomDetails function when the component mounts
    // useEffect(() => {
    //     fetchRoomDetails();
    // }, []);

    // Mock data
    const mockRoomData = {
        id: 1,
        title: 'FULL FURNISHED MEDIUM ROOM WITH BALCONY AT uNIV 360',
        address: "Taman Serdang Jaya,  Seri Kembangan, Selangor",
        description: 'This is a sample room.',
        imgUrls: [
            '/src/assets/room.jpg',
            '/src/assets/room.jpg',
            '/src/assets/room.jpg',
        ],
        rentalFee: 1300,
        bedroom: 5,
        bathroom: 5,
        parking: 5,
        builtUpSize: 1100,
        propertyType: "Condominium",
        vacancy: 1,
        postedDate: "03/05/2023",
        furnishing: true,
        landlord: {
            landlordProfile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            name: "Arif",
            rating: 4.0,
        },
    };


    return (
        <div className='px-10 pb-10'>
            <div className='flex flex-col'>
                <h4 className='font-bold'>{mockRoomData.title}</h4>
                <div className='flex items-center pt-1 pb-5'>
                    <HiLocationMarker size={15} />
                    <h4 className='text-xs font-semibold'>{mockRoomData.address}</h4>
                </div>
                <div className='flex space-x-4'>
                    <iframe
                        className='rounded-lg'
                        width="600" height="400"
                        src="https://www.youtube.com/embed/TtQ9hwYoyWQ"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                    <div className='grid gap-4 grid-cols-2 grid-rows-2'>
                        {mockRoomData.imgUrls.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                alt={`Room Image ${index + 1}`}
                                className='rounded-lg'
                                style={{ maxWidth: '280px', maxHeight: '280px' }}
                            />
                        ))}
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-4 pt-5'>
                    <div className="col-span-3 shadow-xl rounded-xl p-6">
                        <div className='flex flex-col'>
                            <h4 className='font-bold pb-5 text-2xl'>RM{mockRoomData.rentalFee}/ Per Month</h4>
                            <div className='w-48 flex items-center space-x-4 pb-4'>
                                <div className='flex items-center'>
                                    <BiBed />
                                    <h4>{mockRoomData.bedroom}</h4>
                                </div>
                                <div className='flex items-center'>
                                    <BiBath />
                                    <h4>{mockRoomData.bathroom}</h4>
                                </div>
                                <div className='flex items-center'>
                                    <AiOutlineCar />
                                    <h4>{mockRoomData.parking}</h4>
                                </div>
                            </div>
                            <hr></hr>
                            <div className='grid grid-cols-2  mt-3'>
                                <div className='col-span-1'>
                                    <div className='flex flex-col'>
                                        <div className='flex flex-col mb-5'>
                                            <h4 className='font-bold'>Build-Up Size:</h4>
                                            <h4 className='text-sm'>{mockRoomData.builtUpSize} sq. ft.</h4>
                                        </div>
                                        <div className='flex flex-col mb-5'>
                                            <h4 className='font-bold'>Property Type:</h4>
                                            <h4 className='text-sm'>{mockRoomData.propertyType}</h4>
                                        </div>
                                        <div className='flex flex-col '>
                                            <h4 className='font-bold'>Vacancy:</h4>
                                            <h4 className='text-sm'>{mockRoomData.vacancy}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-1'>
                                    <div className='flex flex-col'>
                                        <div className='flex flex-col mb-7'>
                                            <h4 className='font-bold'>Posted Date:</h4>
                                            <h4 className='text-sm'>{mockRoomData.postedDate}</h4>
                                        </div>
                                        <div className='flex flex-col mb-7'>
                                            <h4 className='font-bold'>Furnishing:</h4>
                                            <h4 className='text-sm'>{mockRoomData.furnishing ? "Fully furnished" : "Non-funished"}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 shadow-xl rounded-xl p-6">
                        <h4 className='font-bold text-2xl'>Landlord</h4>
                        <div className='flex flex-col items-center pt-5'>
                            <img src={mockRoomData.landlord.landlordProfile} alt="" className='rounded-full w-20 max-w-full h-auto' />
                            <h4 className='text-sky-700 text-lg'>{mockRoomData.landlord.name}</h4>
                            <div className='flex items-center space-x-1 mt-3'>
                                <h4 className='font-semibold'>{mockRoomData.landlord.rating.toFixed(1)}</h4>
                                <div className='flex space-x-1'>
                                    {[...Array(mockRoomData.landlord.rating)].map((_, index) => (
                                        <AiFillStar key={index} fill='blue' />
                                    ))}
                                    {[...Array(5 - mockRoomData.landlord.rating)].map((_, index) => (
                                        <AiFillStar key={index} fill='grey' />
                                    ))}
                                </div>
                                <h4 className='text-sm'>(7 Reviews)</h4>
                            </div>
                            <div className='bg-orange-400 flex py-2 px-10 mt-3 rounded space-x-2 items-center'>
                                <img src="/src/assets/images/Chat.png" alt="chat icon" className='h-5' />
                                <h4 className='text-sm text-white '>Chat with Me</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}