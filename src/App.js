import logo from './logo.svg';
import './App.css';
import  "./css/style.css"

function App() {
  return (
  

<main className='principal'>

  <title> Lista de tareas</title>

  <form>
    <input type="text" placeholder="Escribe una tarea"></input>
    <button className='add' type='button' >Add</button>

    <div className='Mensaje'></div>
    <button className='delete' type='button'>Eliminar</button>


  </form>

</main>

      
   
  
  
  );
}

export default App;
