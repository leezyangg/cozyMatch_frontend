import RoommateInfoCard from "../components/RoommateInfoCard";
import roommateData from "../assets/requiredData/roommateData";

export default function RoommateMatching() {
    const roommateInfoCard = roommateData.map(roommate => {
        return (
            <RoommateInfoCard
                key={roommate.id}
                {...roommate}
            />
        )
    })

    return (
        <div>
            <div className="grid gap-10 grid-cols-5 grid-rows-2 px-10">
                {roommateInfoCard}
            </div>
        </div>
    )
}