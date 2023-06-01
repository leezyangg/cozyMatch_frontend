import { BiSearchAlt2 } from 'react-icons/bi'
import backgroundImage from '../assets/bgroom.jpg'
import { Routes, Route, useNavigate } from 'react-router-dom';
import RenterHomePage from "../views/RenterHomePage";

export default function HomePage() {
    const navigate = useNavigate();

    const navigateToRenterHomePage = () => {
        // 👇️ navigate to /contacts
        navigate('/RenterHomePage');
    };
    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h1 className='font-bold font-serif text-white text-5xl my-10 drop-shadow-2xl' >Welcome to Cozy<span className="text-yellow-400">Match</span></h1>
            <p className='text-3xl text-white font-sans font-bold italic'>Live Cozy with CozyMatch</p>
            {/* Content */}
            <div className="flex justify-center my-10 ">
                <input className='border bg-gray-100 rounded-xl py-2 font-medium mx-10 mr-5 px-5 h-30 max-w-[500px]' type='text' placeholder='Where do you want to stay?' />
                <div className='h-10 w-50 grid place-items-center mr-5 pr-5'>

                    <button className='w-8 h-8 rounded-full bg-amber-900 hover:bg-yellow-800 flex items-center justify-center' onClick={navigateToRenterHomePage}><BiSearchAlt2 className="text-white" /></button>
                    <Routes>
                        <Route path="/RenterHomePage" element={<RenterHomePage />} />

                    </Routes>
                </div>
            </div>
        </div>
    )
}