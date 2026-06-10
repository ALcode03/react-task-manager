import tasks from "../data/tasks";
import TasksList from "../components/TaskList";
import SearchBar from "../components/SearchBar";

export default function TasksMenu() {

     return (
           <div>
               <h1>Tasks</h1>

               <SearchBar />
               <TasksList tasks={tasks} />
           </div>
     );
}