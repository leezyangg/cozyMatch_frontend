import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { HiLocationMarker } from 'react-icons/hi';
import { BiBed, BiBath } from 'react-icons/bi';
import { AiOutlineCar, AiFillStar } from 'react-icons/ai';
import chat from '../assets/images/Chat.png';
import airConditioner from '../assets/images/air-conditioner.png';
import kitchen from '../assets/images/kitchen-set.png';
import balcony from '../assets/images/balcony.png';
import Wifi from '../assets/images/wifi.png'
import businessCenter from '../assets/images/business.png'
import gym from '../assets/images/gym.png';
import refrigerator from '../assets/images/refrigerator.png';
import badminton from '../assets/images/badminton.png';
import miniMarket from '../assets/images/miniMarket.png';
import salon from '../assets/images/salon.png';
import security from '../assets/images/security.png';
import swimmingPool from '../assets/images/swimmingPool.png';
import playground from '../assets/images/playground.png';
import squash from '../assets/images/squash.png';
import tennis from '../assets/images/tennis.png';
import boy1 from '../assets/images/Boy1.png';
import boy2 from '../assets/images/Boy2.png';
import smoking from '../assets/images/yes-smoking-icon.png';
import noSmoking from '../assets/images/no-smoking-icon.png';
import pet from '../assets/images/pet-icon.png';
import noPet from '../assets/images/no-pets-icon.png';
import drink from '../assets/images/alcohol-icon.png';
import noDrink from '../assets/images/no-alcohol-icon.png';
import earlyBird from '../assets/images/early-bird-icon.png';
import nightOwl from '../assets/images/night-owl-icon.png';

export default function RoomDetail() {
    const navigate = useNavigate()
    const selectUser = (state) => state.auth.user;
    const user = useSelector(selectUser);
    const { Room_ID } = useParams();
    const [room, setRoom] = useState(null);

    useEffect(() => {
        try {
            const fetchRoomDetails = async () => {
                try {
                    console.log(Room_ID);
                    const response = await axios.get(`http://localhost:3000/room/${Room_ID}`);
                    setRoom(response.data);
                    
                    const script = document.createElement('script');
                    script.src = 'https://js.stripe.com/v3/buy-button.js';
                    script.async = true;
                    document.body.appendChild(script);

                    return () => {
                        document.body.removeChild(script);
                    };
                } catch (error) {
                    console.error(error);
                }
            };

            fetchRoomDetails();
        } catch (error) {
            console.error(error);
        }
    }, [Room_ID]);

    if (!room) {
        return <div>Loading...</div>;
    }

    // Mock data
    const mockRoomData = {
        bedroom: 5,
        bathroom: 5,
        parking: 5,

        landlord: {
            landlordProfile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            name: "Arif",
            rating: 4.0,
        },
        renter1: {
            id: 1,
            name: "Izrin",
            occupation: "student",
            cleanRoomFrequency: 1,
            smoking: false,
            pet: false,
            drink: false,
            isEarly: false,
        },
        renter2: {
            id: 2,
            name: "Lee",
            occupation: "Genius",
            cleanRoomFrequency: 2,
            smoking: false,
            pet: false,
            drink: true,
            isEarly: true,
        },
    };

    function navigateToChat() {
        if (user.userType == 'Renter') {
            navigate("/chat1");
        } else {
            navigate("/chat2");
        }
    }

    const facilities = room.facilities[0].split(',');
    return (
        <div className='px-10 pb-10'>
            <div className='flex flex-col'>
                <h2 className='font-bold text-2xl'>{room.propertyName}</h2>
                <div className='flex items-center pt-1 pb-5'>
                    <HiLocationMarker size={15} />
                    <h4 className='text-xs font-semibold'>{room.address}</h4>
                </div>
                <div className='flex space-x-10 overflow-x-auto scrollbar-hide'>
                    <video src={`http://localhost:3000/uploads/${room.video}`} controls className='rounded-lg object-cover' width="600" height="600"></video>
                    {room.image.map((image, index) => (
                        <img
                            key={index}
                            src={`http://localhost:3000/uploads/${image}`}
                            className='rounded-lg max-w-sm object-scale-down'
                        />
                    ))}
                </div>
                <div className='grid grid-cols-4 gap-4 pt-5'>
                    <div className="col-span-3 shadow-xl rounded-xl p-6">
                        <div className='flex flex-col'>
                            <h4 className='font-bold pb-5 text-2xl'>RM{room.rentalFee}/ Per Month</h4>
                            <div className='w-48 flex items-center space-x-4 pb-4'>
                                <div className='flex items-center'>
                                    <BiBed />
                                    <h4>{room.bedroom}</h4>
                                </div>
                                <div className='flex items-center'>
                                    <BiBath />
                                    <h4>{room.bathroom}</h4>
                                </div>
                                <div className='flex items-center'>
                                    <AiOutlineCar />
                                    <h4>{room.parking}</h4>
                                </div>
                            </div>
                            <hr></hr>
                            <div className='grid grid-cols-3  mt-3'>
                                <div className='col-span-1'>
                                    <div className='flex flex-col'>
                                        <div className='flex flex-col mb-5'>
                                            <h4 className='font-bold'>Build-Up Size:</h4>
                                            <h4 className='text-sm'>1100 sq. ft.</h4>
                                        </div>
                                        <div className='flex flex-col mb-5'>
                                            <h4 className='font-bold'>Property Type:</h4>
                                            <h4 className='text-sm'>{room.type}</h4>
                                        </div>
                                        <div className='flex flex-col '>
                                            <h4 className='font-bold'>Vacancy:</h4>
                                            <h4 className='text-sm'>{room.vacancy}</h4>
                                        </div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                                <div className='col-span-1'>
                                    <div className='flex flex-col'>
                                        <div className='flex flex-col mb-7'>
                                            <h4 className='font-bold'>Posted Date:</h4>
                                            <h4 className='text-sm'>{room.postedDate}</h4>
                                        </div>
                                        <div className='flex flex-col mb-7'>
                                            <h4 className='font-bold'>Furnishing:</h4>
                                            <h4 className='text-sm'>{room.furnishing ? "Fully furnished" : "Non-funished"}</h4>
                                        </div>
                                    </div>
                                </div>

                                <script async
                                    src="https://js.stripe.com/v3/buy-button.js">
                                </script>

                                {user.userType=="Renter"? <stripe-buy-button
                                    buy-button-id="buy_btn_1NEYEJLUWJSa0D8TJAh6jYPW"
                                    publishable-key="pk_live_51NEQAnLUWJSa0D8TkPBd79cMNuoY2rE00m9vnICeS7OUqenVAxaNtihjWSpJEQhEz5q2rkLNeWqCafq8ijI3VjFU00Hy4crJZ7"
                                >
                                </stripe-buy-button> : <></>}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 shadow-xl rounded-xl p-6">
                        <h4 className='font-bold text-2xl'>Landlord</h4>
                        <div className='flex flex-col items-center pt-5'>
                            <img src={mockRoomData.landlord.landlordProfile} alt="" className='rounded-full w-20 max-w-full h-auto mt-1' />
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

                            {/* Logic of the Chat with me */}
                            <div className='bg-orange-400 flex py-3 px-12 mt-3 rounded space-x-2 items-center cursor-pointer' onClick={navigateToChat}>
                                <img src={chat} alt="chat icon" className='h-5' />
                                <h4 className='text-sm text-white font-bold'>Chat with Me</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-4 pt-5'>
                    <div className='col-span-3'>
                        <div className='shadow-xl rounded-xl p-6'>
                            <div className='flex flex-col'>
                                <h4 className='font-bold text-2xl'>Property Features</h4>
                                <div className='grid grid-cols-3 grid-rows-3 gap-4 pt-5 space-y-1'>

                                    {/* Logic whether or not to show the property features */}
                                    {facilities.includes('aircond') && <div className='flex items-center space-x-3 col-span-1 px-1'>
                                        <img src={airConditioner} alt="aircond" className='h-7' />
                                        <h4>Air Conditioner</h4>
                                    </div>}
                                    {facilities.includes('refrigerator') && <div className='flex items-center space-x-3 col-span-1 px-1'>
                                        <img src={refrigerator} alt="refrigerator" className='h-7' />
                                        <h4>Refrigerator</h4>
                                    </div>}
                                    {facilities.includes('kitchen') && <div className='flex items-center space-x-3 col-span-1 px-1'>
                                        <img src={kitchen} alt="kitchen" className='h-7' />
                                        <h4>Kitchen Utility</h4>
                                    </div>}
                                    {facilities.includes('Wifi') && <div className='flex items-center space-x-3 col-span-1 px-1'>
                                        <img src={Wifi} alt="Wifi" className='h-7' />
                                        <h4>Wifi</h4>
                                    </div>}
                                    {facilities.includes('security') && <div className='flex items-center space-x-3 col-span-1 px-1'>
                                        <img src={security} alt="security" className='h-7' />
                                        <h4>24 Hours Security</h4>
                                    </div>}
                                    {facilities.includes('balcony') && <div className='flex items-center space-x-3 col-span-1 px-1'>
                                        <img src={balcony} alt="balcony" className='h-7' />
                                        <h4>Balcony</h4>
                                    </div>}
                                </div>
                            </div>
                        </div>
                        <div className='shadow-xl rounded-xl p-6'>
                            <h4 className='font-bold text-2xl'>Facilities</h4>
                            <div className='grid grid-cols-3 grid-rows-3 gap-4 pt-5 space-y-1'>

                                {/* Logic whether or not to show the Facilities */}
                                {facilities.includes('business') && <div className='flex items-center space-x-3 col-span-1 px-1'>
                                    <img src={businessCenter} alt="Business Center" className='h-7' />
                                    <h4>Business Center</h4>
                                </div>}
                                {facilities.includes('salon') && <div className='flex items-center space-x-3 col-span-1 px-1'>
                                    <img src={salon} alt="salon" className='h-7' />
                                    <h4>Salon</h4>
                                </div>}
                                {facilities.includes('minimarket') && <div className='flex items-center space-x-3 col-span-1 px-1'>
                                    <img src={miniMarket} alt="miniMarket" className='h-7' />
                                    <h4>Mini Market</h4>
                                </div>}
                                {facilities.includes('gymnasium') && <div className='flex items-center space-x-3 col-span-1 px-1'>
                                    <img src={gym} alt="gym" className='h-7' />
                                    <h4>Gymnasium</h4>
                                </div>}
                                {facilities.includes('pool') && <div className='flex items-center space-x-3 col-span-1 px-1'>
                                    <img src={swimmingPool} alt="swimmingPool" className='h-7' />
                                    <h4>Swimming Pool</h4>
                                </div>}
                                {facilities.includes('playground') && <div className='flex items-center space-x-3 col-span-1 px-1'>
                                    <img src={playground} alt="playground" className='h-7' />
                                    <h4>Playground</h4>
                                </div>}
                                {facilities.includes('squash') && <div className='flex items-center space-x-3 col-span-1 px-1'>
                                    <img src={squash} alt="squash" className='h-7' />
                                    <h4>Squash Court</h4>
                                </div>}
                                {facilities.includes('tennis') && <div className='flex items-center space-x-3 col-span-1 px-1'>
                                    <img src={tennis} alt="tennis" className='h-7' />
                                    <h4>Tennis Court</h4>
                                </div>}
                                {facilities.includes('badminton') && <div className='flex items-center space-x-3 col-span-1 px-1'>
                                    <img src={badminton} alt="badminton" className='h-7' />
                                    <h4>Badminton Court</h4>
                                </div>}
                            </div>
                        </div>
                    </div>

                    {/* Roommate Information Here */}
                    <div className="col-span-1 shadow-xl rounded-xl p-6">
                        <h4 className='font-bold text-2xl'>Roommate</h4>
                        <div className='flex flex-col mt-4'>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='flex flex-col items-center'>
                                    <img src={boy1} alt="boy1" className='h-20' />
                                    <div className="flex flex-col items-center space-y-5 py-5 rounded-t-xl">
                                        <div className="flex flex-col items-center">

                                            {/* Roommate Information Here */}
                                            <h4 className="font-semibold">{mockRoomData.renter1.name}</h4>
                                            <h4 className="text-sm">{mockRoomData.renter1.occupation}</h4>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <h4 className="font-semibold">Clean room</h4>
                                            <h4 className="text-sm">{mockRoomData.renter1.cleanRoomFrequency} per week</h4>
                                        </div>
                                        <div className="flex flex-col items-center space-y-1">
                                            <h4 className="font-semibold">Preference</h4>
                                            <div className="flex items-center space-x-3">
                                                <img src={mockRoomData.renter1.smoking ? smoking : noSmoking} alt="" className="h-5" />
                                                <img src={mockRoomData.renter1.pet ? pet : noPet} alt="" className="h-5" />
                                                <img src={mockRoomData.renter1.drink ? drink : noDrink} alt="" className="h-5" />
                                                <img src={mockRoomData.renter1.isEarly ? earlyBird : nightOwl} alt="" className="h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <img src={boy2} alt="boy2" className='h-20' />
                                    <div className="flex flex-col items-center space-y-5 py-5 rounded-t-xl">
                                        <div className="flex flex-col items-center">

                                            {/* Roommate Information Here */}
                                            <h4 className="font-semibold">{mockRoomData.renter2.name}</h4>
                                            <h4 className="text-sm">{mockRoomData.renter2.occupation}</h4>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <h4 className="font-semibold">Clean room</h4>
                                            <h4 className="text-sm">{mockRoomData.renter2.cleanRoomFrequency} per week</h4>
                                        </div>
                                        <div className="flex flex-col items-center space-y-1">
                                            <h4 className="font-semibold">Preference</h4>
                                            <div className="flex items-center space-x-3">
                                                <img src={mockRoomData.renter2.smoking ? smoking : noSmoking} alt="" className="h-5" />
                                                <img src={mockRoomData.renter2.pet ? pet : noPet} alt="" className="h-5" />
                                                <img src={mockRoomData.renter2.drink ? drink : noDrink} alt="" className="h-5" />
                                                <img src={mockRoomData.renter2.isEarly ? earlyBird : nightOwl} alt="" className="h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='bg-orange-400 flex py-3 px-12 mt-3 rounded space-x-2 items-center cursor-pointer' onClick="#">
                                    <h4 className='text-sm text-white font-bold'>Roommate Information</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}