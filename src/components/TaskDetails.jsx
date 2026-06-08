import { userParams } from "react-router-dom";

const tasks = [
    {
        id: 1,
        title: "Study React Router",
        desc: "Learn routing basics"
    },
    {
        id: 2,
        title: "Build project",
        desc: "Create SPA app"
    },
    {
        id: 3,
        title: "Practice usestate",
        desc: "Usestate() and useEffect()"
    }
];

export default function TaskDetails() {
    const { id } = useParams();

    const task = tasks.find(task => task.id === Number(id));

    if(!task) {
        return <h1>Task Not Found</h1>;
    }

    return (
        <div>
            <h1>{task.title}</h1>
            <h2>{task.desc}</h2>
        </div>
    )
}