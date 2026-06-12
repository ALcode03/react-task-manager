# Task Manager SPA with React Router

A modern Single Page Application (SPA) built with React.js and React
Router to demonstrate professional frontend development concepts,
component-based architecture, and client-side routing.

This project simulates a task management platform where users can
navigate through multiple sections of the application, manage tasks,
view reports, access user profiles, review notifications, and explore
dashboard statistics without triggering full page reloads.

The application is designed as an educational project to help students
learn how real-world React applications are structured and developed.

---

## Features

### React Fundamentals

- Functional Components
- JSX (JavaScript XML)
- Props
- Component Composition
- Reusable Components
- Event Handling
- Conditional Rendering
- Rendering Lists with `.map()`
- State Management with `useState`
- Component-Based Architecture

### React Router Features

- Client-Side Routing
- Dynamic Routes
- Route Parameters
- Navigation using `Link`
- 404 Page Handling
- SPA Navigation
- Multi-Page Application Structure

### Application Features

- Dashboard Overview
- Task Management
- Task Details View
- User Profile Page
- Settings Page
- Reports Page
- Team Management
- Notifications Center
- Activity Feed
- Help Center
- Responsive Navigation

---

## Pages

### Home

Landing page of the application.

### Dashboard

Displays application statistics and user information.

### Tasks

Displays all available tasks.

### Task Details

Displays detailed information for a selected task using dynamic routing.

Example:

```text
/tasks/1
```

### Task Menu

Provides quick navigation for task-related actions.

### Create Task

Allows users to create new tasks.

### Profile

Displays information about the current user.

### Settings

Allows users to manage application preferences.

### Reports

Displays project metrics and productivity statistics.

### Team

Displays team members involved in the project.

### Notifications

Displays system notifications and updates.

### Activity

Displays recent user and application activities.

### Help

Provides support information and frequently asked questions.

### About

Displays information about the application.

### Not Found

Custom 404 page for invalid routes.

---

## Components

### Navigation Components

- Navbar
- Sidebar
- Footer

### Task Components

- TaskCard
- TaskList
- TaskForm
- SearchBar

### Dashboard Components

- DashboardStats
- UserCard
- PageHeader

### Team Components

- TeamList
- TeamMemberCard

### Notification Components

- NotificationList
- NotificationCard

### Activity Components

- ActivityFeed

---

## Routing Structure

```text
/
/dashboard
/tasks
/tasks/new
/tasks/:id
/tasks/menu
/profile
/settings
/reports
/team
/notifications
/activities
/help
/about
*
```

---

## Technologies Used

- React.js
- React Router DOM
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite

---

## Learning Objectives

This project helps students understand:

- How Single Page Applications work
- How React Router manages navigation
- How to create reusable components
- How to organize large React projects
- How to use dynamic routes
- How to pass data using props
- How to manage state with React Hooks
- How to build scalable frontend applications
- How professional React applications are structured

---

## Future Improvements

- Local Storage Integration
- Backend API Integration
- User Authentication
- Protected Routes
- Context API
- Dark Mode
- Task Categories
- Task Priorities
- Team Collaboration Features
- Real-Time Notifications

---

## Educational Purpose

This project was created as part of a React.js learning program to
demonstrate modern frontend development practices and introduce students
to professional application architecture using React and React Router.