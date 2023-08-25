import React from 'react'

export const Cuadricula = (props) => {
    //estilo cuadricula s
  return (
    <ul>
              <div className="grid-container">
                {props.items.map((item, index)=> 
                    (
                        <div className="grid-item" key={index}>
                        {item.nombre} - {item.cantidad}
                        </div>
                    ))
                }
                </div>
        </ul>
  )
}
