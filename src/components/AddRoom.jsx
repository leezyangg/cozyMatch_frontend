import React from 'react'
import loginImg from '../assets/room.jpg'

export default function AddRoom() {
    return (
        <div>
            <div><img src={loginImg} alt="" /></div>
            <div>
                <form>
                    <h2 className="text-3xl font-bold">
                        List New Room
                    </h2>
                    <div>
                        <label>Property Title *</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Address & Location *</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Type *</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Price (RM) *</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Furnishing *</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Vacancy *</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Facilities</label>
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
                    <div>
                        <label>Description</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Upload Property Video *</label>
                        <input type="text"/>
                    </div>
                    <div>
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