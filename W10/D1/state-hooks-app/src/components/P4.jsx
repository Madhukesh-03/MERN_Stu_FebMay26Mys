// Derived state and conditional rendering 
import { useState } from "react";

export function DerivedStateConditionalRendering() {

    const [tasks, setTasks] = useState([
        { id: 1, title: 'Learn useState', completed: true },
        { id: 2, title: 'Practice JS', completed: false },
        { id: 3, title: 'Learn useContext', completed: false }
    ]);

    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    // Derived state
    const totalTasks = tasks.length;
    const completed = tasks.filter((task) => task.completed).length;
    const pendingTasks = totalTasks - completed;
    const allCompleted = completed === totalTasks && totalTasks > 0;

    let statusMessage = 'Keep going';

    if (totalTasks === 0) {
        statusMessage = 'No tasks available';
    } else if (allCompleted) {
        statusMessage = 'All tasks completed';
    } else if (completed > 0) {   // ✅ fixed here
        statusMessage = 'Good progress';
    }

    return (
        <>
            <p>Total tasks: {totalTasks}</p>
            <p>Completed tasks: {completed}</p> {/* ✅ fixed here */}
            <p>Pending tasks: {pendingTasks}</p>

            <p>Status: {statusMessage}</p>

            {allCompleted && (
                <p style={{ color: 'green' }}>
                    Great job! You've completed all your tasks!
                </p>
            )}

            <p>
                Progress: {allCompleted ? 'Finished' : 'In progress'}
            </p>

            <div>
                <h3>Task List</h3>
                {tasks.map((task) => (
                    <div key={task.id}>
                        {task.title} - {task.completed ? 'Done' : 'Pending'}
                        <button onClick={() => toggleTask(task.id)}>
                            Toggle
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}