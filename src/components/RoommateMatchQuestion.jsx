import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePreferences } from '../redux/preferenceSlice';
import { Routes, Route, useNavigate } from 'react-router-dom';
import RoommateMatching from "../views/RoommateMatching";

export default function RoommateMatchQuestion() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updatePreferences(formValues));
        navigate('/roommateMatch');
    };

    const [formValues, setFormValues] = useState({
        nickname: '',
        cleanRoomFrequency: '',
        isEarly: '',
        smoking: '',
        pet: '',
        drink: '',
    })

    const handleInputChange = (event) => {
        const { name, value, type } = event.target;
        const newValue = type === 'radio' ? (value === 'true') : value;
    
        setFormValues((prevFormValues) => ({
          ...prevFormValues,
          [name]: newValue,
        }));
      };

    return (
        <div>

            <div>
                <form className='max-w-[700px] w-full mx-auto' onSubmit={handleSubmit}>
                    <h2 className="text-3xl font-bold py-5 mx-2">
                        Some questions before proceed...
                    </h2>
                    <div className='grid grid-cols-2 gap-5 py-2 mx-2'>
                        <div>
                            <div className='flex flex-col py-2'>
                                <label>What is your nickname?{' '}</label>
                                <input className='border p-2' type="text" name="nickname" value={formValues.nickname} onChange={handleInputChange}/>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label>What often do you clean your room? </label>
                                <div>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="everyday" name="cleanRoomFrequency" />
                                        <span className="ml-2">Everyday</span>
                                    </label>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="atleastonceaweek" name="cleanRoomFrequency" />
                                        <span className="ml-2">At least once a week</span>
                                    </label>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="atleastonceamonth" name="cleanRoomFrequency" />
                                        <span className="ml-2">At least once a month</span>
                                    </label>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="atleastonceayear" name="cleanRoomFrequency" />
                                        <span className="ml-2">At least once a year</span>
                                    </label>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="never" name="cleanRoomFrequency" />
                                        <span className="ml-2">Never</span>
                                    </label>
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label>Are you an early bird or a night owl?</label>
                                <div>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="true" name="isEarly" checked={formValues.isEarly === true} onChange={handleInputChange}/>
                                        <span className="ml-2">Early bird</span>
                                    </label>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="false" name="isEarly" checked={formValues.isEarly === false} onChange={handleInputChange}/>
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
                                        <input type="radio" value="true" name='smoking' checked={formValues.smoking === true} onChange={handleInputChange}/>
                                        <span className="ml-2">Yes</span>
                                    </label>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="false" name='smoking' checked={formValues.smoking === false} onChange={handleInputChange}/>
                                        <span className="ml-2">No</span>
                                    </label>
                                </div>
                            </div>

                            <div className='flex flex-col py-2'>
                                <label>Do you like pets? </label>
                                <div>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="true" name='pet' checked={formValues.pet === true} onChange={handleInputChange}/>
                                        <span className="ml-2">Yes</span>
                                    </label>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="false" name='pet' checked={formValues.pet === false} onChange={handleInputChange}/>
                                        <span className="ml-2">No</span>
                                    </label>
                                </div>
                            </div>

                            <div className='flex flex-col py-2'>
                                <label>Do you like to drink alcohol?</label>
                                <div>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="true" name='drink' checked={formValues.drink === true} onChange={handleInputChange}/>
                                        <span className="ml-2">Yes</span>
                                    </label>
                                    <label className="flex mt-2 items-center">
                                        <input type="radio" value="false" name='drink' checked={formValues.drink === false} onChange={handleInputChange}/>
                                        <span className="ml-2">No</span>
                                    </label>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div>
                        <button type="submit" className='border px-5 my-5 py-2 rounded-md bg-amber-900 hover:bg-yellow-800 text-white'>Submit</button>
                        <Routes>
                            <Route path="/roommateMatch" element={<RoommateMatching />} />

                        </Routes>
                    </div>

                </form>
            </div>
        </div>
    )
}