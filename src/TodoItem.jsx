export default function TodoItem(item){
    return <div>
        {item.name}&nbsp;<button onClick={()=>{
            item.updateTodos(item.todos.filter((current)=>{
                return current.id != item.id;
            }))
        }}>remove</button>
    </div>

}