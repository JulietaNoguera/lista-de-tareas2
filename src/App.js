import './App.css';
import ListaDeCompra from './composicion/ListaDeCompras';
import { Formulario } from './componentes/Formulario';
import { useState } from 'react';
import { Cuadricula } from './componentes/Cuadricula';

function App() {
  //lista de tareas pre-definidas
  let listaCompleta= [ 
    {nombre:"TAREA", cantidad:1},
    {nombre:"TAREA", cantidad:2},
    {nombre:"TAREA", cantidad:10},
    {nombre:"TAREA", cantidad:5},
    {nombre:"TAREA", cantidad:8},

  ]
  //Hocks para cambiar el estado del arreglo, los estilos y el formulario
  const [arreglo,setArreglo]= useState(listaCompleta)
  const [mostrarFormulario, setMostrarFormulario] = useState(false); 
  const [cambiarEstilo , setCambiarEstilo] = useState(false);

  // muestra los boton Mostrar tareas (que cambian de estilo de lista a cuadricula cuando se realiza el evento onclick)
  //muestra el boton de formulario (que aparece y desaparece cuando se realiza el evento onclick )
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
