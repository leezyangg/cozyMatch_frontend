import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { HiLocationMarker } from 'react-icons/hi';
import { BiBed, BiBath } from 'react-icons/bi';
import { AiOutlineCar, AiFillStar } from 'react-icons/ai';

import chat from '../assets/images/Chat.png';
import airConditioner from '../assets/images/air-conditioner.png';
import kitchen from '../assets/images/kitchen-set.png';
import balcony from '../assets/images/balcony.png';
import garden from '../assets/images/gardening.png';
import gym from '../assets/images/gym.png';
import bbq from '../assets/images/bbq.png';
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

    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = 'https://js.stripe.com/v3/buy-button.js';
    //     script.async = true;
    //     document.body.appendChild(script);

    //     return () => {
    //         document.body.removeChild(script);
    //     };
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
        rentalFee: 1500,
        bedroom: 5,
        bathroom: 5,
        parking: 5,

        // Property features
        aircon: true,
        kitchen: true,
        balcony: true,
        garden: true,

        // Facilities
        gym: true,
        bbq: true,
        playground: true,
        squash: true,
        tennis: true,

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
        renters: {
            id: 1,
            name: "Izrin",
            occupation: "student",
            cleanRoomFrequency: 1,
            smoking: false,
            pet: false,
            drink: false,
            isEarly: true,
        },
    };


    return (
        <div className='px-10 pb-10'>
            <div className='flex flex-col'>
                <h4 className='font-bold'>{room.propertyName}</h4>
                <div className='flex items-center pt-1 pb-5'>
                    <HiLocationMarker size={15} />
                    <h4 className='text-xs font-semibold'>{room.address}</h4>
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
                                            <h4 className='text-sm'>{mockRoomData.builtUpSize} sq. ft.</h4>
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

                                <stripe-buy-button
                                    buy-button-id="buy_btn_1NEYEJLUWJSa0D8TJAh6jYPW"
                                    publishable-key="pk_live_51NEQAnLUWJSa0D8TkPBd79cMNuoY2rE00m9vnICeS7OUqenVAxaNtihjWSpJEQhEz5q2rkLNeWqCafq8ijI3VjFU00Hy4crJZ7"
                                >
                                </stripe-buy-button>
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
                            <div className='bg-orange-400 flex py-3 px-12 mt-3 rounded space-x-2 items-center cursor-pointer' onClick="#">
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
                                    {mockRoomData.aircon && <div className='flex items-center space-x-3 col-span-1 px-1'>
                                        <img src={airConditioner} alt="aircon" className='h-7' />
                                        <h4>Air Conditioner</h4>
                                    </div>}
                                    {mockRoomData.kitchen && <div className='flex items-center space-x-3 col-span-1 px-1'>
                                        <img src={kitchen} alt="kitchen" className='h-7' />
                                        <h4>Kitchen Cabinet</h4>
                                    </div>}
                                    {mockRoomData.balcony && <div className='flex items-center space-x-3 col-span-1 px-1'>
                                        <img src={balcony} alt="balcony" className='h-7' />
                                        <h4>Balcony</h4>
                                    </div>}
                                    {mockRoomData.garden && <div className='flex items-center space-x-3 col-span-1 px-1'>
                                        <img src={garden} alt="Garden" className='h-7' />
                                        <h4>Garden</h4>
                                    </div>}
                                </div>
                            </div>
                        </div>
                        <div className='shadow-xl rounded-xl p-6'>
                            <h4 className='font-bold text-2xl'>Facilities</h4>
                            <div className='grid grid-cols-3 grid-rows-3 gap-4 pt-5 space-y-1'>

                                {/* Logic whether or not to show the Facilities */}
                                {mockRoomData.gym && <div className='flex items-center space-x-3 col-span-1 px-1'>
                                    <img src={gym} alt="gym" className='h-7' />
                                    <h4>Gymnasium</h4>
                                </div>}
                                {mockRoomData.bbq && <div className='flex items-center space-x-3 col-span-1 px-1'>
                                    <img src={bbq} alt="bbq" className='h-7' />
                                    <h4>BBQ</h4>
                                </div>}
                                {mockRoomData.playground && <div className='flex items-center space-x-3 col-span-1 px-1'>
                                    <img src={playground} alt="playground" className='h-7' />
                                    <h4>Playground</h4>
                                </div>}
                                {mockRoomData.squash && <div className='flex items-center space-x-3 col-span-1 px-1'>
                                    <img src={squash} alt="squash" className='h-7' />
                                    <h4>Squash Court</h4>
                                </div>}
                                {mockRoomData.tennis && <div className='flex items-center space-x-3 col-span-1 px-1'>
                                    <img src={tennis} alt="tennis" className='h-7' />
                                    <h4>Tennis Court</h4>
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
                                            <h4 className="font-semibold">{mockRoomData.renters.name}</h4>
                                            <h4 className="text-sm">{mockRoomData.renters.occupation}</h4>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <h4 className="font-semibold">Clean room</h4>
                                            <h4 className="text-sm">{mockRoomData.renters.cleanRoomFrequency} per week</h4>
                                        </div>
                                        <div className="flex flex-col items-center space-y-1">
                                            <h4 className="font-semibold">Preference</h4>
                                            <div className="flex items-center space-x-3">
                                                <img src={mockRoomData.renters.smoking ? smoking : noSmoking} alt="" className="h-5" />
                                                <img src={mockRoomData.renters.pet ? pet : noPet} alt="" className="h-5" />
                                                <img src={mockRoomData.renters.drink ? drink : noDrink} alt="" className="h-5" />
                                                <img src={mockRoomData.renters.isEarly ? earlyBird : nightOwl} alt="" className="h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <img src={boy2} alt="boy2" className='h-20' />
                                    <div className="flex flex-col items-center space-y-5 py-5 rounded-t-xl">
                                        <div className="flex flex-col items-center">

                                            {/* Roommate Information Here */}
                                            <h4 className="font-semibold">{mockRoomData.renters.name}</h4>
                                            <h4 className="text-sm">{mockRoomData.renters.occupation}</h4>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <h4 className="font-semibold">Clean room</h4>
                                            <h4 className="text-sm">{mockRoomData.renters.cleanRoomFrequency} per week</h4>
                                        </div>
                                        <div className="flex flex-col items-center space-y-1">
                                            <h4 className="font-semibold">Preference</h4>
                                            <div className="flex items-center space-x-3">
                                                <img src={mockRoomData.renters.smoking ? smoking : noSmoking} alt="" className="h-5" />
                                                <img src={mockRoomData.renters.pet ? pet : noPet} alt="" className="h-5" />
                                                <img src={mockRoomData.renters.drink ? drink : noDrink} alt="" className="h-5" />
                                                <img src={mockRoomData.renters.isEarly ? earlyBird : nightOwl} alt="" className="h-5" />
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