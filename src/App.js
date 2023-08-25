import './App.css';
import ListaDeCompra from './composicion/ListaDeCompras';
import { Formulario } from './componentes/Formulario';
import { useState } from 'react';
import { Cuadricula } from './componentes/Cuadricula';

function App() {
  let listaCompleta= [ 
    {nombre:"TAREA", cantidad:1},
    {nombre:"TAREA", cantidad:2},
    {nombre:"TAREA", cantidad:10},
    {nombre:"TAREA", cantidad:5},
    {nombre:"TAREA", cantidad:8},

  ]
  const [arreglo,setArreglo]= useState(listaCompleta)
  const [mostrarFormulario, setMostrarFormulario] = useState(false); 
  const [cambiarEstilo , setCambiarEstilo] = useState(false);

  
  return (
    <>
      <h3>Lista de Tareas</h3> 
    
      <button type="button" className="btn btn-primary btn-lg" onClick={() => setCambiarEstilo(!cambiarEstilo)}>Mostrar Tareas</button>
      <button type="button" className="btn btn-secondary btn-lg" onClick={() => setMostrarFormulario(!mostrarFormulario)}>Formulario</button>

      {
      cambiarEstilo ? (
        <ListaDeCompra items={arreglo}/>
      )
      :(
        <Cuadricula items={arreglo}/>
      )
      }
      
      {mostrarFormulario && <Formulario agregarTarea={setArreglo} />}
    </>
  );
}

export default App;
