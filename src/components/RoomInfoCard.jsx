import { BiBed, BiBath } from 'react-icons/bi';
import { AiOutlineCar } from 'react-icons/ai';
import PropTypes from 'prop-types';

export default function RoomInfoCard(props) {
    return (
        <div className="flex shadow-xl mx-20 rounded-xl items-center bg-slate-300 space-x-8">
            <div className="m-5 h-20 w-20">
                <img src="src/assets/room.jpg" alt="roomlist" className="h-full rounded-xl" />
            </div>
            <div className="w-48">
                <h4 className="font-bold">Address:</h4>
                <p className="text-sm">{props.address}</p>
            </div>
            <div className="w-48 flex flex-col items-center">
                <h4 className="font-bold">Property Type:</h4>
                <p className="text-sm">{props.type}</p>
            </div>
            <div className="w-48 flex flex-col items-center">
                <h4 className="font-bold">Posted Date:</h4>
                <p className="text-sm">{props.postedDate}</p>
            </div>
            <div className="w-48 flex flex-col items-center">
                <h4 className="font-bold">Rent Per Month:</h4>
                <p className="text-sm">RM{props.rentalFee}</p>
            </div>
            <div className='w-48 flex items-center space-x-4'>
                <div className='flex items-center'>
                    <BiBed />
                    {props.bedroom}
                </div>
                <div className='flex items-center'>
                    <BiBath />
                    {props.bathroom}
                </div>
                <div className='flex items-center'>
                    <AiOutlineCar />
                    {props.parking}
                </div>
            </div>
            <div className={props.availability ? 'text-green-500' : 'text-red-500'}>
                {props.availability ? 'Available' : 'Unavailable'}
            </div>
        </div>
    );
}

RoomInfoCard.propTypes = {
    //img: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    postedDate: PropTypes.string.isRequired,
    rentalFee: PropTypes.number.isRequired,
    bedroom: PropTypes.number.isRequired,
    bathroom: PropTypes.number.isRequired,
    parking: PropTypes.number.isRequired,
    availability: PropTypes.bool.isRequired,
};
