import { Routes, Route, useNavigate } from 'react-router-dom';
import RoommateMatching from "../views/RoommateMatching";

export default function RoommateMatchQuestion() {
    const navigate = useNavigate();

    const navigateToRoommateMatching = () => {
        // 👇️ navigate to /contacts
        navigate('/roommateMatch');
    };

    return (
        <div>

            <div>
                <form className='max-w-[700px] w-full mx-auto'>
                    <h2 className="text-3xl font-bold py-5 mx-2">
                        Some questions before proceed...
                    </h2>
                    <div className='grid grid-cols-2 gap-5 py-2 mx-2'>
                        <div>
                            <div className='flex flex-col py-2'>
                                <label>What is your nickname?{' '}</label>
                                <input className='border p-2' type="text" />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label>What often do you clean your room? </label>
                                <div>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="everyday" />
                                        <span className="ml-2">Everyday</span>
                                    </label>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="atleastonceaweek" />
                                        <span className="ml-2">At least once a week</span>
                                    </label>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="atleastonceamonth" />
                                        <span className="ml-2">At least once a month</span>
                                    </label>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="atleastonceayear" />
                                        <span className="ml-2">At least once a year</span>
                                    </label>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="never" />
                                        <span className="ml-2">Never</span>
                                    </label>
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label>Are you an early bird or a night owl?</label>
                                <div>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="earlybird" />
                                        <span className="ml-2">Early bird</span>
                                    </label>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="nightowl" />
                                        <span className="ml-2">Night owl</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col py-2'>
                                <label>Do you smoke? </label>
                                <div>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="smoke-yes" />
                                        <span className="ml-2">Yes</span>
                                    </label>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="smoke-no" />
                                        <span className="ml-2">No</span>
                                    </label>
                                </div>
                            </div>

                            <div className='flex flex-col py-2'>
                                <label>Do you any pets? </label>
                                <div>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="pet-yes" />
                                        <span className="ml-2">Yes</span>
                                    </label>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="pet-no" />
                                        <span className="ml-2">No</span>
                                    </label>
                                </div>
                            </div>

                            <div className='flex flex-col py-2'>
                                <label>Do you like to drink alcohol?</label>
                                <div>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="alcohol-yes" />
                                        <span className="ml-2">Yes</span>
                                    </label>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="alcohol-no" />
                                        <span className="ml-2">No</span>
                                    </label>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div>
                        <button className='border px-5 my-5 py-2 rounded-md bg-amber-900 hover:bg-yellow-800 text-white' onClick={navigateToRoommateMatching}>Submit</button>
                        <Routes>
                            <Route path="/roommateMatch" element={<RoommateMatching />} />

                        </Routes>
                    </div>

                </form>
            </div>
        </div>
    )
}