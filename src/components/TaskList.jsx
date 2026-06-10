import TaskCard from "./TaskCard";

export default function TaskList ({ tasks }) {
    return (
        <div>
            {
                tasks.map(task => (
                    <taskCard 
                         key={task.id}
                         task={task}
                />
                ))
            }
        </div>
    );
}