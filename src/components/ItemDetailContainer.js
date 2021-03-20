import { useState } from "react"
import ItemDetail from "./ItemDetail"
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom"

const ItemDetailContainer = (props) => {
    let { id } = useParams();
    return (
        <>  
            <div className="row mx-0 justify-content-center">
            <ItemDetail information={props.informationDetail} idtot={id} />
            {console.log('renderizo ItemDetailContainer')}
            </div>
        </>
    )
}
export default ItemDetailContainer;