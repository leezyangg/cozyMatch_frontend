import RoomInfoCard from "../components/RoomInfoCard";
import listedroom from "../assets/listedRoom/data";
import { HiLocationMarker } from 'react-icons/hi';

export default function RoomListing() {
    const listedRoomCard = listedroom.map(listedRoom => {
        return (
            <RoomInfoCard
                key={listedRoom.id}
                {...listedRoom}
            />
        )
    })

    return (
        <div>
            <h2 className="mx-20 font-bold text-2xl">Room Listing</h2>
            <div className="flex mx-20 mt-3 mb-5 items-center">
                <HiLocationMarker size={20} />
                <h3>Taman Serdang Java, Sri Kembangan, Selangor</h3>
            </div>
            <div className="space-y-7">
                {listedRoomCard}
            </div>
        </div>
    )
}