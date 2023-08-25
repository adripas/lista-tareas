import logo from "../assets/img/delete.png";
import '../css/style.css';

const TaskList =({task, deleteTask})=> {


     return ( 

 <div className="showList">
    <div className='message' >
        
       <p>{task.task}</p>       
       {console.log(task.task)}                                                                   
      
     </div>
    <div className="button"> 
        <button  type='button'></button>
        <img src= {logo} className="logo_delete" onClick={()=>deleteTask(task.id)}></img>
    </div>
  </div>
    );
}


export default TaskList;