
import '../css/style.css';
import React, {useState} from 'react';



const Task = ({addTask})=> {

const [task, setTask]= useState("") ;
//const {addtask} = props;

const handletask =(e)=>{
    e.preventDefault();
 
     console.log(task);
     if(task === "")
     {
        alert('debe digitar una tarea');
     }else {
     addTask(task);
     setTask("");
     }
}


return ( <>
<form onSubmit={handletask}>
<h1> Lista de tareas</h1> 

<div className='write_tarea'>   

    <p> <input className='input' type='text' placeholder='Digite una Tarea' value={task} onChange={e =>setTask(e.target.value)}></input> </p>
    <p><button className='add' type='button' > Add</button></p>
</div>
</form>
</>
);}

export default Task;