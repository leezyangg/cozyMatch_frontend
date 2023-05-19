import { GrMapLocation } from 'react-icons/gr';
import { BiMoneyWithdraw } from 'react-icons/bi';
import PropTypes from 'prop-types';

export default function RoommateInfoCard(props) {
    let scoreStyle
    if (props.matchScore >= 80) {
        scoreStyle = 'bg-lime-400 flex flex-col items-center rounded-b-xl py-2';
    } else if (props.matchScore >50) {
        scoreStyle = 'bg-amber-300 flex flex-col items-center rounded-b-xl py-2';
    } else {
        scoreStyle = 'bg-amber-700 flex flex-col items-center rounded-b-xl py-2';	
    }
    return (
        <div>
            <div className="shadow-xl rounded-xl bg-transparent">
                <div className="flex flex-col items-center space-y-5 bg-stone-100 py-5 rounded-t-xl">
                    <div className="flex flex-col items-center">
                        <img src="src\assets\react.svg" alt="renter face" className="mb-2" />
                        <h4 className="font-semibold">{props.name}</h4>
                        <h4 className="text-sm">{props.occupation}</h4>
                    </div>
                    <div className="flex flex-col items-center">
                        <h4 className="font-semibold">Clean room</h4>
                        <h4 className="text-sm">{props.cleanRoomFrequency} per week</h4>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                        <h4 className="font-semibold">Preference</h4>
                        <div className="flex items-center space-x-4">
                            <img src={props.smoking ? 'src/assets/images/yes-smoking-icon.png' : 'src/assets/images/no-smoking-icon.png'} alt="" className="h-5" />
                            <img src={props.pet ? 'src/assets/images/pet-icon.png' : 'src/assets/images/no-pets-icon.png'} alt="" className="h-5" />
                            <img src={props.drink ? 'src/assets/images/alcohol-icon.png' : 'src/assets/images/no-alcohol-icon.png'} alt="" className="h-5" />
                            <img src={props.isEarly ? 'src/assets/images/early-bird-icon.png' : 'src/assets/images/night-owl-icon.png'} alt="" className="h-5" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center bg-stone-200	 py-5">
                    <h4 className="text-sm font-semibold">Extra Information</h4>
                    <div className='flex items-center space-x-2'>
                        <GrMapLocation />
                        <h4 className='text-sm'>{props.distanceFromCollege} km from university</h4>

                    </div>
                    <div className='flex items-center space-x-2'>
                        <BiMoneyWithdraw />
                        <h4 className='text-sm'>RM {props.renterFee} per month</h4>
                    </div>
                </div>

                <div className={scoreStyle}>
                    <h4 className='font-bold'>Match Score: {props.matchScore}%</h4>
                </div>
            </div>
            <div className='flex flex-col items-center w-full mt-3'>
                <button className='bg-amber-900 rounded-xl w-full text-white font-bold py-1'>Check Room</button>
            </div>
        </div>

    )
}

RoommateInfoCard.propTypes = {
    name: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    cleanRoomFrequency:PropTypes.number.isRequired,
    distanceFromCollege: PropTypes.number.isRequired,
    renterFee: PropTypes.number.isRequired,
    matchScore: PropTypes.number.isRequired,
    availability: PropTypes.bool.isRequired,
    smoking: PropTypes.bool.isRequired,
    pet: PropTypes.bool.isRequired,
    drink: PropTypes.bool.isRequired,
    isEarly: PropTypes.bool.isRequired,
  };