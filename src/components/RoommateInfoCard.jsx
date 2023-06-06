/* eslint-disable react/prop-types */
import { GrMapLocation } from 'react-icons/gr';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { useSelector } from 'react-redux';

const selectPreferences = (state) => state.preferences.preferences;

export default function RoommateInfoCard({ roommate }) {
    const user = useSelector(selectPreferences);
    let matchScore = 0;
    let score = 0;

    if (user.smoking === roommate.smoking) {
        score += 1;
    }
    if (user.pet === roommate.pet) {
        score += 1;
    }
    if (user.drink === roommate.drink) {
        score += 1;
    }
    if (user.isEarly === roommate.isEarly) {
        score += 1;
    }

    if (score === 4) {
        matchScore = 100;
    } else if (score === 3) {
        matchScore = 75;
    } else if (score === 2) {
        matchScore = 50;
    } else if (score === 1) {
        matchScore = 25;
    } else {
        matchScore = 0;
    }

    let scoreStyle
    if (matchScore >= 80) {
        scoreStyle = 'bg-lime-400 flex flex-col items-center rounded-b-xl py-2 w-full';
    } else if (matchScore > 50) {
        scoreStyle = 'bg-amber-300 flex flex-col items-center rounded-b-xl py-2 w-full';
    } else {
        scoreStyle = 'bg-amber-700 flex flex-col items-center rounded-b-xl py-2 w-full';
    }

    function handleClick() {
        alert('Im here!')
    }

    return (
        <div>
            <div className="shadow-xl rounded-xl bg-transparent">
                <div className="flex flex-col items-center space-y-5 bg-stone-100 py-5 rounded-t-xl">
                    <div className="flex flex-col items-center">
                        <img src="src\assets\react.svg" alt="renter face" className="mb-2" />
                        <h4 className="font-semibold">{roommate.name}</h4>
                        <h4 className="text-sm">{roommate.occupation}</h4>
                    </div>
                    <div className="flex flex-col items-center">
                        <h4 className="font-semibold">Clean room</h4>
                        <h4 className="text-sm">{roommate.cleanRoomFrequency} per week</h4>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                        <h4 className="font-semibold">Preference</h4>
                        <div className="flex items-center space-x-4">
                            <img
                                src={roommate.smoking ? 'src/assets/images/yes-smoking-icon.png' : 'src/assets/images/no-smoking-icon.png'}
                                alt=""
                                className="h-5"
                            />
                            <img
                                src={roommate.pet ? 'src/assets/images/pet-icon.png' : 'src/assets/images/no-pets-icon.png'}
                                alt=""
                                className="h-5"
                            />
                            <img
                                src={roommate.drink ? 'src/assets/images/alcohol-icon.png' : 'src/assets/images/no-alcohol-icon.png'}
                                alt=""
                                className="h-5"
                            />
                            <img
                                src={roommate.isEarly ? 'src/assets/images/early-bird-icon.png' : 'src/assets/images/night-owl-icon.png'}
                                alt=""
                                className="h-5"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center rounded-b-xl bg-stone-200 flex-grow">
                    <h4 className="text-sm font-semibold">Extra Information</h4>
                    <div className="flex items-center space-x-2">
                        <GrMapLocation />
                        <h4 className="text-sm">{roommate.distanceFromCollege} km from university</h4>
                    </div>
                    <div className="flex items-center space-x-2">
                        <BiMoneyWithdraw />
                        <h4 className="text-sm">RM {roommate.renterFee} per month</h4>
                    </div>
                    <div className={`mt-3 ${scoreStyle}`}>
                        <h4 className='font-bold'>Match Score: {matchScore}%</h4>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center w-full mt-3">
                <button className="bg-amber-900 rounded-xl w-full text-white font-bold py-1" onClick={handleClick}>Check Room</button>            </div>
        </div>
    );
}


