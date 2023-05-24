import loginImg from '../assets/room.jpg'
import {BsUpload} from 'react-icons/bs'

export default function AddRoom() {
    return (
        <div className='grid gird-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'><img className='w-full h-full object-cover' src={loginImg} alt="" /></div>
            <div className='bg-gray-100 flex flex-col justify-center'>
                <form className='max-w-[700px] w-full mx-auto'>
                    <h2 className="text-3xl font-bold py-5 mx-2">
                        List New Room
                    </h2>
                    <div className='flex flex-col py-2 mx-2'>
                        <label>Property Title{' '}
                            <span className="text-red-600">*</span></label>
                        <input className='border p-2' type="text" />
                    </div>
                    <div className='flex flex-col py-2 mx-2'>
                        <label>Address & Location{' '}
                            <span className="text-red-600">*</span></label>
                        <input className='border p-2' type="text" />
                    </div>
                    <div className='grid grid-cols-2 gap-1 mx-2 py-2'>
                        <div>
                            <div className='py-2'> 
                            <label>Type{' '}
                                <span className="text-red-600">*{' '}</span></label>
                            <input className='border p-2' type="text" />
                            </div>
                            <div className='py-2'>
                            <label>Furnishing{' '}
                                <span className="text-red-600">*{' '}</span></label>
                            <input className='border p-2' type="text" />
                        </div>
                        </div>
                        <div>
                            <div className='py-2'>
                            <label>Price (RM){' '}
                                <span className="text-red-600">*{' '}</span></label>
                            <input className='border p-2' type="text" />
                            </div>
                            <div className='py-2'>
                            <label>Vacancy{' '}
                                <span className="text-red-600">*{' '}</span></label>
                            <input className='border p-2' type="text" />
                        </div>
                        </div>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Facilities</label>
                        <div className='grid grid-cols-3 gap-1'>

                            <div>
                                <p>
                                    <input type="checkbox" /> Wifi
                                </p>
                                <p>
                                    <input type="checkbox" /> Air-conditioning
                                </p>
                                <p>
                                    <input type="checkbox" /> Business Center
                                </p>
                                <p>
                                    <input type="checkbox" /> Refrigerator
                                </p>
                                <p>
                                    <input type="checkbox" /> Kitchen Utility
                                </p>
                            </div>
                            <div>
                                <p>
                                    <input type="checkbox" /> Parking
                                </p>
                                <p>
                                    <input type="checkbox" /> Gymnasium
                                </p>
                                <p>
                                    <input type="checkbox" /> Mini Market
                                </p>
                                <p>
                                    <input type="checkbox" /> Playground
                                </p>
                                <p>
                                    <input type="checkbox" /> Salon
                                </p>
                            </div>
                            <div>
                                <p>
                                    <input type="checkbox" /> Swimming Pool
                                </p>
                                <p>
                                    <input type="checkbox" /> Squash Court
                                </p>
                                <p>
                                    <input type="checkbox" /> Tennis Court
                                </p>
                                <p>
                                    <input type="checkbox" /> Badminton Court
                                </p>
                                <p>
                                    <input type="checkbox" /> 24 Hours Security
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className='flex flex-col py-2'>
                        <label>Description</label>
                        <input className='border p-2' type="text" />
                    </div>
                    <div className='grid grid-cols-2 gap-5 py-2 mx-2'>
                        <div>
                            <button className='border-2 border-dashed border-gray-500 w-full my-5 py-2 relative flex items-center justify-center'><BsUpload className='mr-2'/>Upload Property Video{' '}
                                <span className="text-red-600">*</span></button>
                        </div>
                        <div>
                            <button className='border-2 border-dashed border-gray-500 w-full my-5 py-2 relative flex items-center justify-center'><BsUpload className='mr-2'/>Upload Property Pictures</button>
                        </div>
                    </div>

                    <div>
                        <p>
                            <input type="checkbox" /> I agree to the terms and conditions of CozyMatch{' '}
                            <span className="text-red-600">*</span>
                        </p>
                        <button className='border w-full my-5 py-2 bg-amber-900 hover:bg-yellow-800 text-white'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}