// import the data set
import notifications from "../data/notifications";
// Import the other component
import NotificationCard from "./NotificationCard";

export default function NotificationList() {
    return (
        <div>
            {
                notifications.map((notification, index) => (
                    <NotificationCard
                    key={index}
                    message={notification}
             />
                ))
            }
        </div>
    );
}