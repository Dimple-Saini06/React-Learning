import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let[todos, setTodos] = useState([{task:"sample Task", id:uuidv4(), isDone:false}]);
    let[newTodo, setNewTodo] = useState("");

    function addNewTask() {
        setTodos([...todos, {task:newTodo, id:uuidv4(), isDone : false}]);+
        setNewTodo("");
    }

    function updateTodoList(event) {
        setNewTodo(event.target.value);
    }

    function deleteTodo(id){
        setTodos((prevTodo) => todos.filter((prevTodo) => prevTodo.id != id));
    }
    

    function updateAll(){
        setTodos(
            todos.map((todo)=>{
                return {
                    ...todo,
                    task : todo.task.toUpperCase(),
                };
            })
        )
    }

    function upperCaseOne(id){
        setTodos(
            todos.map((todo)=>{
                if(todo.id == id){
                    return {
                        ...todo,
                        task : todo.task.toUpperCase(),
                    }
                }else{
                    return todo;
                }
            })
        )
    }

    function doneMark(){
        setTodos(
           todos.map((todo)=>{
                return {
                    ...todo,
                    isDone : true,
                };
            })
        );
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
                        <li key={todo.id}>
                            <span style={todo.isDone ? {textDecorationLine:"line-through"} : {}}>{todo.task}</span>
                            &nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                            &nbsp;
                            <button onClick={()=>upperCaseOne(todo.id)}>UpperCase One</button>
                            &nbsp; 
                            <button onClick={()=>doneMark()}>Done</button>

                        </li>
                    ))
                }
            </ul>
            <button onClick={updateAll}>update All</button>
        </div>
        
    )
}