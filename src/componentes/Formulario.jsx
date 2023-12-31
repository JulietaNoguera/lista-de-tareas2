import React, { useState } from 'react'
import swal from 'sweetalert'
export const Formulario = ({agregarTarea}) => {

    // hock para cambiar el estado de form empezar vacio
    const [estadoForm, setEstadoForm] = useState(
        {
            nombre:'',
            cantidad:'',
        }
    )
        
    const {nombre, cantidad} = estadoForm
        //agarra lo que esta en los campos
    const onInputChange =({target})=> {
        const {name, value}= target
        setEstadoForm({
        ...estadoForm,
        [name]:value
        })
        
    }

    // mensaje de error si no los campos estan vacios 
    const errores = (event)=>{
      
        event.preventDefault()
        swal({
            title:'Error',
            text:'Faltan completar campos',
            icon:'error',
            button:'Aceptar',
        }); 
    
    }
    //mensaje de que los datos fueron guardados correctamente
    const validacion=(event)=>{
              
        event.preventDefault()
        swal({
            title:'Datos guardados',
            text:'Los datos fueron cargados correctamente ',
            icon:'success',
            button:'Aceptar',
            }); 
    }
    //si los campos estan vacios manda el msj de error , si estan completos los guarda y envìa mensaje de validaciòn
    const onSubmit =(event)=> {
        if (estadoForm.nombre ===''|| estadoForm.cantidad===''){
                errores(event)
            } 
        else{
            const envio={ 
                nombre:estadoForm.nombre,
                cantidad: estadoForm.cantidad
            } 
            event.preventDefault()
            agregarTarea(tareas => [...tareas, envio]) 
            setEstadoForm({
                nombre: '',
                cantidad: '',
            });
            validacion(event);
        }
        }
    

  return (
    <>
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" name="nombre" placeholder='Escribe la tarea' value={nombre} onChange={onInputChange}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="cantidad" className="form-label">Cantidad</label>
                <input type="number" className="form-control" name="cantidad"placeholder='Escribe la cantidad en números' value={cantidad} onChange={onInputChange}></input>
            </div>
            <button type="submit" className="btn btn-primary">Cargar</button>
        </form>


    </>

  )
}
