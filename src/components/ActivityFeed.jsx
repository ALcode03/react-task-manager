//import theh dataset
import activities from "..data/activities";
import { Activity } from "react";

export default functioon ActivityFeed() {
    return (
        <ul>
        {
            activities.map((activity) => (
                <li key={index}>
                    {activity}
                </li>
            ))
        }
        </ul>
    );
}
