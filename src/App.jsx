import { Routes, Route } from "react-router-dom";

// Import the components
import Navbar from "./components/Navbar";
// Import the pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import ReportsPage from "./pages/ReportsPage";
import Tasks from "./pages/Tasks";
import TasksMenu from "./pages/TasksMenu";
import CreateTask from "./pages/CreateTask";
import TaskDetails from "./pages/TaskDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>

          <Route 
            path="/"
            element={<Home />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

           <Route
            path="/profile"
            element={<ProfilePage />}
          />

          <Route
            path="/settings"
            element={<SettingsPage />}
          />

          <Route
            path="/reports"
            element={<ReportsPage />}
          />

          <Route 
            path="/tasks"
            element={<Tasks />}
          />

          <Route 
            path="/tasks/menu"
            element={<TasksMenu />}
          />

          <Route 
            path="/tasks/new"
            element={<CreateTask />}
          />


          <Route 
            path="/tasks/:id" 
            element={<TaskDetails />}
          />

          <Route 
            path="/about"
            element={<About />}
          />

          <Route 
            path="*"
            element={<NotFound />}
          />

      </Routes>
    </>
  )
}