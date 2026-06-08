import { Link } from "react-router-dom";

const Tasks = [
    { id: 1, title: "Study React Router" },
    { id: 2, title: "Build project" },
    { id: 3, title: "Pracice useState" }
];

export default function Tasks() {
    return (
        <div>
             <h1>Tasks</h1>
             <ul>
             {
                Tasks.map(task => (
                    <li key= {task.id}>
                        <link
                            to={`/tasks/${task.id}`}
                            >
                                {task.title}
                                </link>
                    </li>
                ))
             }
                </ul>
        </div>
    );
}