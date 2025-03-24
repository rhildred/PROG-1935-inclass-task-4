import { useState } from "react";
export default function TodoInput(props){
    const [value, setValue] = useState("");

    return <>
    <input onChange={evt => setValue(evt.target.value)} placeholder="todo item"/>
    <button onClick={()=>{
        props.updateTodos([{id: props.todos.length + 1, name:value}, ...props.todos]);
    }}>Add</button>
    </>
}