
import React, {useState} from 'react';
import Task from "./Task";
import TaskList from "./TaskList";
import '../css/style.css';


const TaskAll= () => {
const [taskList, setTaskList] = useState([]);
const [count, setCount] = useState(0);

const addTask = task => {
   const taskUpdate= ([...taskList, {id:count, task: task} ])
   setTaskList(taskUpdate);
    setCount(count+1);
    console.log(taskList);
}

const deleteTask = id =>{
   const  taskUpdate = taskList.filter(task => task.id !== id);
   setTaskList(taskUpdate);
}

return ( <>
     <Task addTask = {addTask}></Task>
     {taskList.map((task, index)=> (
        <TaskList task={task} key ={index} deleteTask ={deleteTask}>
            {console.log(task)}
        </TaskList>
     ))}
    
    </>
  );
}

export default TaskAll;