import React, { useState } from "react";

const TodoList = () => {
    
    // Define the state variable and the function to update it
    const [todos, setTodos] = useState([]);

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
