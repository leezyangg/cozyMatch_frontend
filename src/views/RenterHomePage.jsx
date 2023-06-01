import Map from "../components/Map";
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import AvailableRoomCard from "../components/AvailableRoomCard";
import availableRooms from "../assets/requiredData/roomDetailData";


export default function RenterHomePage() {
  const availableRoomCard = availableRooms.map(availableRoom => {
    return (
        <AvailableRoomCard
            key={availableRoom.id}
            {...availableRoom}
        />
    )
})
  const [enabled, setEnabled] = useState(false)
  //click switch button

  return (
    <div className="px-7">
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col">
          <div className="flex items-center">
            <h4 className="font-semibold">Accomodation in Serdang</h4>
            <div className="ml-auto items-center">
              <div className="flex items-center space-x-2">
                <h4>Roommate</h4>
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
                  relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={`${enabled ? 'translate-x-6' : 'translate-x-0'}
                    pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                  />
                </Switch>
              </div>
            </div>
          </div>
          <h4 className="text-xs text-slate-400 font-normal">1248 results • Jul 14 - 21</h4>
          <div className="mt-5 flex space-x-4">
            <div className="flex border rounded-md px-3 py-1 border-gray-700 space-x-1 items-center cursor-pointer">
              <img src="src/assets/images/Label.png" alt="Price" className="h-3" />
              <h4 className="text-xs">Price</h4>
            </div>
            <div className="flex border rounded-md px-3 py-1 border-gray-700 space-x-1 items-center cursor-pointer">
              <img src="src/assets/images/Apartment.png" alt="Price" className="h-3" />
              <h4 className="text-xs">Apartment</h4>
            </div>
            <div className="flex border rounded-md px-3 py-1 border-gray-700 space-x-1 items-center cursor-pointer">
              <img src="src/assets/images/Floor.png" alt="Price" className="h-3" />
              <h4 className="text-xs">Floor</h4>
            </div>
            <div className="flex border rounded-md px-3 py-1 border-gray-700 space-x-1 items-center cursor-pointer">
              <img src="src/assets/images/More.png" alt="Price" className="h-3" />
              <h4 className="text-xs">More</h4>
            </div>
          </div>
          <div className="overflow-y-auto max-h-[530px] my-2">
            <div className="flex flex-col">
            {availableRoomCard}
            </div>
          </div>
        </div>
        <div className="">
          <Map />
        </div>
      </div>
    </div>
  );
}
