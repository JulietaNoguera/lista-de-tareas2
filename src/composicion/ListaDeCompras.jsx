import React from "react";
import ItemDeCompra from "./ItemDeCompras";

const ListaDeCompra =(props)=>{
    return(
        <ul>
            {
                props.items.map((item, index)=>(
                    <ItemDeCompra
                    key={index}
                    nombre={item.nombre}
                    cantidad= {item.cantidad}
                    />
                ))
            }
        </ul>
    )
}

export default ListaDeCompra;
