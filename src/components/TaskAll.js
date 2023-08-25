
import React, {useState} from 'react';
import Task from "./Task";
import TaskList from "./TaskList";
import '../css/style.css';


const TaskAll= () => {
const [taskList, setTaskList] = useState([]);
const [count, setCount] = useState(0);

const addTask = task => {
    setTaskList ([...taskList, {id:count, task: task} ])
    setCount(count+1);
    console.log(taskList);
}

return ( <>
     <Task addTask = {addTask}></Task>
     {taskList.map((task, index)=> (
        <TaskList task={task} key ={index}>
            {console.log(task)}
        </TaskList>
     ))}
    
    </>
  );
}

export default TaskAll;