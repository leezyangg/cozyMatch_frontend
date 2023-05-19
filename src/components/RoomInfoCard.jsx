import { BiBed, BiBath } from 'react-icons/bi';
import { AiOutlineCar } from 'react-icons/ai';

export default function RoomInfoCard() {

    return (
        <div className="flex shadow-xl mx-20 rounded-xl items-center bg-slate-300 space-x-8">
            <div className="m-5 h-20 w-20">
                <img src="src/assets/room.jpg" alt="roomlist" className="h-full rounded-xl" />
            </div>
            <div className="w-48">
                <h4 className="font-bold">Address:</h4>
                <p className="text-sm">No 32, Jalan Bukit Serdang, Taman Bukit Serdang, 43400 Serdang Selangor</p>
            </div>
            <div className="w-48 flex flex-col items-center">
                <h4 className="font-bold">Property Type:</h4>
                <p className="text-sm">Condominium</p>
            </div>
            <div className="w-48 flex flex-col items-center">
                <h4 className="font-bold">Posted Date:</h4>
                <p className="text-sm">03/05/2020</p>
            </div>
            <div className="w-48 flex flex-col items-center">
                <h4 className="font-bold">Rent Per Month:</h4>
                <p className="text-sm">RM1,300</p>
            </div>
            <div className='w-48 flex items-center space-x-4'>
                <div className='flex items-center'>
                    <BiBed />
                    5
                </div>
                <div className='flex items-center'>
                    <BiBath />
                    5
                </div>
                <div className='flex items-center'>
                    <AiOutlineCar />
                    5
                </div>
            </div>
            <div className='text-green-500'>
                Available
            </div>
        </div>
    )
}