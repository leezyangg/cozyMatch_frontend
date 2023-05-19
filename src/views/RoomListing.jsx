import RoomInfoCard from "../components/RoomInfoCard";
import listedroom from "../assets/listedRoom/data"

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
        <div className="space-y-7">
            {listedRoomCard}
        </div>
    )
}