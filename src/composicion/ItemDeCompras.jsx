import React from "react";

const ItemDeCompra = (props) => {
    return(
        <li>
           {props.nombre} - {props.cantidad}
        </li>
    );
}
export default ItemDeCompra