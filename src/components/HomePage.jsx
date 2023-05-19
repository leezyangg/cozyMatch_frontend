import { BiSearchAlt2 } from 'react-icons/bi'
import backgroundImage from '../assets/bgroom.jpg'

export default function HomePage() {
    return (
        <div>
            <div className='flex justify-center items-center w-screen h-screen' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="bg-yellow-200 rounded-xl w-full max-w-[700px] h-[80px] py-3 flex items-center">
                    <input className='border bg-gray-100 rounded-xl py-2 font-medium mx-10 mr-5 px-5 h-30 w-full max-w-[700px]' type='text' placeholder='Where do you want to stay?' />
                    <div className='h-10 w-50 grid place-items-center mr-5 pr-5'>
                        <button className='w-8 h-8 rounded-full bg-amber-900 hover:bg-yellow-800 flex items-center justify-center'><BiSearchAlt2 className="text-white" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}