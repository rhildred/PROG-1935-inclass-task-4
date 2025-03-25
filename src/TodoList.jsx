import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
export default function TodoList(){
    const [todos, updateTodos] = useState([{id:1, name:"walk dogs"},{id:2, name: "feed cats"}]);
    return <>
    <div>
        <TodoInput todos={todos} updateTodos={updateTodos} />
    </div>
    <div>
        {todos.map(item => 
            <TodoItem key={item.id} { ...item} todos={todos} updateTodos={updateTodos}/>
        )}
    </div>
    </> 
}