/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { HiLocationMarker } from 'react-icons/hi';
import { AiFillStar } from 'react-icons/ai';
import { MdFavoriteBorder } from 'react-icons/md';

export default function AvailableRoomCard() {

    return (
        <div className="flex shadow-xl rounded-xl p-6 bg-slate-300 my-5">
            <div className=" h-[150px] w-[150px] mr-7">
                <img src="src/assets/room.jpg" alt="roomlist" className="h-full rounded-xl object-cover" />
            </div>
            <div className='flex flex-col'>
                <div className='flex'>
                    <div>
                        <h4 className='font-semibold'>Block 1 Flat Sri Serdang</h4>
                        <div className='flex'>
                            <HiLocationMarker size={15} />
                            <h4 className='text-xs'>Taman Sri Serdang, Sri Kembangan, Selangor</h4>
                        </div>
                    </div>
                </div>
                <div className='mt-2'>
                    <h4 className='text-xs max-w-xs'>Wifi • Air conditioning • Kitchen • Heating • Smokers • Parking • Balcony • Animal friendly</h4>
                </div>
                <div className="mt-3 flex space-x-3">
                    <div className="flex border rounded-md px-2 py-1 border-gray-700 space-x-1 items-center">
                        <h4 className="text-xs">New Building</h4>
                    </div>
                    <div className="flex border rounded-md px-2 py-1 border-gray-700 space-x-1 items-center">
                        <h4 className="text-xs">Common Friend</h4>
                    </div>
                </div>
                <div className='flex mt-3 items-center'>
                    <h4 className='mr-1'>4.0</h4>
                    <div className='flex mr-1'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <h4 className='text-xs'>(7 Review)</h4>
                </div>
            </div>
            <div className='flex flex-col ml-auto'>
                <MdFavoriteBorder />
                <h4 className='mt-auto'>RM700/month</h4>
            </div>
        </div>
    )
}

AvailableRoomCard.propTypes = {
    name: PropTypes.string.isRequired,
    roommates: PropTypes.string.isRequired,
    rent: PropTypes.number.isRequired,
    facilities: PropTypes.string.isRequired,
    roomavailable: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired
};