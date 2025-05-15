# React To-Do List Application

## Overview

This is a simple **To-Do List** web application built with **React**, **Bootstrap**, and **React Icons**. It allows users to create, view, filter, and delete tasks. Each task has a title, description, and status (Pending or Completed). Users can filter tasks to view all tasks, only pending tasks, or only completed tasks.

## Features

- Add new tasks with a title, description, and status (Pending or Completed).
- View all tasks in a card-based layout.
- Filter tasks by status (All, Pending, or Completed).
- Delete tasks using a trash can icon.
- Responsive design using Bootstrap for styling.
- Visual feedback with badges (red for Pending, green for Completed).

## Project Structure

The project is organized into the following components:

src/
├── Components/
│ ├── CreateArea.jsx # Form to add new tasks
│ ├── Header.jsx # Displays the app title
│ ├── Note.jsx # Displays a single task
├── App.jsx # Main component managing state and rendering
├── App.css # Custom CSS for styling
├── data.js # (Commented out) Optional file for initial task data

### Dependencies

- **React**: For building the user interface.
- **Bootstrap**: For responsive styling (included via CDN in `App.jsx`).
- **React Icons**: For the delete button icon (`FaTrashAlt`).

## How It Works

### 1. **App.jsx** (Main Component)

- **Purpose**: The core component that manages the application's state and renders the UI.
- **State**:
  - `toDoList`: An array storing all tasks (each task is an object with `title`, `description`, and `status`).
  - `filter`: A string ("all", "Pending", or "Completed") to determine which tasks to display.
- **Functionality**:
  - Maintains the list of tasks using the `useState` hook.
  - Provides functions to add (`addTaskHandler`) and delete (`deleteTaskHandler`) tasks.
  - Filters tasks based on the `filter` state (e.g., show only Pending tasks).
  - Renders the `Header`, `CreateArea`, filter dropdown, and a list of `Note` components.
  - Displays a "No Items Added" message if the filtered task list is empty.

### 2. **CreateArea.jsx** (Task Creation Form)

- **Purpose**: Allows users to input a new task's title, description, and status.
- **State**:
  - `formData`: An object storing the form inputs (`title`, `description`, `status`).
- **Functionality**:
  - Renders a form with two text inputs (title, description) and a dropdown (status).
  - Updates `formData` when users type or select an option.
  - On form submission, calls the `onAdd` prop (passed from `App.jsx`) to add the task to the `toDoList`.
  - Prevents page refresh on form submission using `e.preventDefault()`.

### 3. **Note.jsx** (Task Display)

- **Purpose**: Displays a single task as a card with its title, description, status, and a delete button.
- **Props**:
  - `id`: The index of the task in the `toDoList` (used for deletion).
  - `task`: The task object containing `title`, `description`, and `status`.
  - `onDelete`: A function to delete the task (passed from `App.jsx`).
- **Functionality**:
  - Displays the task's details in a styled card.
  - Shows the status as a badge (red for Pending, green for Completed).
  - Includes a delete button with a trash can icon (`FaTrashAlt`) that calls `onDelete` with the task’s `id`.

### 4. **Header.jsx** (App Title)

- **Purpose**: Displays the app’s title ("To Do List") in a styled header.
- **Functionality**: A simple, stateless component with static JSX for the title.

## Code Flow

1. **Initialization**:
   - The `App` component initializes an empty `toDoList` and sets the `filter` to "all".
2. **Adding a Task**:
   - The user enters a title, description, and status in the `CreateArea` form.
   - On submission, `CreateArea` calls `onAdd`, passing the task object to `App`.
   - `App` updates `toDoList` by adding the new task at the beginning.
3. **Filtering Tasks**:
   - The user selects a filter option (All, Pending, or Completed) from the dropdown in `App`.
   - The `filter` state updates, and `filteredTasks` is computed to show only matching tasks.
4. **Displaying Tasks**:
   - `App` maps over `filteredTasks` to render a `Note` component for each task.
   - If no tasks match the filter, a "No Items Added" message is shown.
5. **Deleting a Task**:
   - The user clicks the delete button in a `Note` component.
   - `Note` calls `onDelete` with the task’s `id`.
   - `App` updates `toDoList` by filtering out the task with the matching `id`.

## Setup Instructions

1. **Prerequisites**:
   - Node.js and npm installed.
   - A code editor like VS Code.
2. **Installation**:

   ```bash
   # Clone the repository
   git clone <repository-url>

   # Navigate to the project directory
   cd todo-list

   # Install dependencies
   npm install
   ```
