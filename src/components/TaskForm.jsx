import { useState } from "react";

export default function taskForm() {
    const [title, setTitle] = useState(""); 

    const handleSubmit = event => {
        event.preventDefault();

        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            < input 
            type="text"
            value={title}
            placeholder="Task title"
            onChange={
                event => setTitle(event.target.vale)
            }
            />

            <button type="submit">
                Creat Task
            </button>
        </form>
    )
}