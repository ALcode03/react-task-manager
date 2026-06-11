import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
                <Link to="/">Home</Link>
                <br/>
                <Link to="/dashboard">Dashboard</Link>
                <br/>
                <Link to="/profile">Profile</Link>
                 <br/>
                 <Link to="/settings">Settings</Link>
                 <br/>
                 <Link to="/reports">Reports</Link>
                 <br/>
                <Link to="/tasks">Task</Link>
                 <br/>
                <Link to="/tasksMenu">Task Menu</Link>
                 <br/>
                <Link to="/about">About</Link>
        </nav>

    );
}