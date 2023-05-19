import React from 'react'
import loginImg from '../assets/room.jpg'

export default function AddRoom() {
    return (
        <div className='grid gird-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div><img className='w-full h-full object-cover' src={loginImg} alt="" /></div>
            <div className='bg-gray-100 flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto'>
                    <h2 className="text-3xl font-bold py-5">
                        List New Room
                    </h2>
                    <div className='flex flex-col py-2'>
                        <label>Property Title *</label>
                        <input type="text"/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Address & Location *</label>
                        <input type="text"/>
                    </div>
                    <div className='grid grid-cols-2 gap-1 py-2'>
                        <div>
                        <label>Type *</label>
                        <input type="text"/>
                        </div>
                        <div>
                        <label>Price (RM) *</label>
                        <input type="text"/>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-1 py-2'>
                    <div>
                        <label>Furnishing *</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Vacancy *</label>
                        <input type="text"/>
                    </div>
                    </div>
                    <div className='flex flex-col py-2'>
                    <label>Facilities</label>
                    <div className='grid grid-cols-3 gap-1'>
                        
                        <div>
                        <p>
                        <input type="checkbox"/> Wifi
                        </p>
                        <p>
                        <input type="checkbox"/> Air-conditioning
                        </p>
                        <p>
                        <input type="checkbox"/> Business Center
                        </p>
                        <p>
                        <input type="checkbox"/> Refrigerator
                        </p>
                        <p>
                        <input type="checkbox"/> Kitchen Utility
                        </p>
                        </div>
                       <div>
                       <p>
                        <input type="checkbox"/> Parking
                        </p>
                        <p>
                        <input type="checkbox"/> Gymnasium
                        </p>
                        <p>
                        <input type="checkbox"/> Mini Market
                        </p>
                        <p>
                        <input type="checkbox"/> Playground
                        </p>
                        <p>
                        <input type="checkbox"/> Salon
                        </p>
                       </div>
                        <div>
                        <p>
                        <input type="checkbox"/> Swimming Pool
                        </p>
                        <p>
                        <input type="checkbox"/> Squash Court
                        </p>
                        <p>
                        <input type="checkbox"/> Tennis Court
                        </p>
                        <p>
                        <input type="checkbox"/> Badminton Court
                        </p>
                        <p>
                        <input type="checkbox"/> 24 Hours Security
                        </p>
                        </div>
                        
                    </div>
                    </div>
                    
                    <div className='flex flex-col py-2'>
                        <label>Description</label>
                        <input type="text"/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Upload Property Video *</label>
                        <input type="text"/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Upload Property Pictures</label>
                        <input type="text"/>
                    </div>
                    <div>
                    <p>
                        <input type="checkbox"/> I agree to the terms and conditions of CozyMatch *
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}