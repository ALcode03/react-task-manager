// Import the dataset
import activities from "../data/activities";

export default function ActivityFeed() {
    return (
        <ul>
            {
                activities.map((activity, index) => (
                    <li key={index}>
                        {activity}
                    </li>
                ))
            }
        </ul>
    );
}