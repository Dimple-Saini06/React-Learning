import {useState} from 'react';

export default function TodoList() {
    let[todos, setTodos] = useState(["sample Task"]);
    let[newTodo, setNewTodo] = useState("");

    function addNewTask() {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    }

    function updateTodoList(event) {
        setNewTodo(event.target.value);
    }
    return(
        <div>
            
            <input placeholder="Enter Task" value={newTodo} onChange={updateTodoList} />
            &nbsp;
            <button onClick={addNewTask}>Add Task</button>
            <hr></hr>
            <h4>Todo List</h4>
            <ul>
                {
                    todos.map((todo)=>(
                        <li>{todo}</li>
                    ))
                }
            </ul>

        </div>
        
    )
}