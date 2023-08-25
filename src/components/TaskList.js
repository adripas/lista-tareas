import logo from "../assets/img/delete.png";
import '../css/style.css';

const TaskList =({task})=> {

     
    return ( 

 <div className="showList">
    <div className='message' >
        
       <p>{task.task}</p>       
       {console.log(task.task)}                                                                   
      
     </div>
    <div className="button"> 
        <button  type='button' ></button>
        <img src= {logo} className="logo_delete"></img>
    </div>
  </div>
    );
}


export default TaskList;