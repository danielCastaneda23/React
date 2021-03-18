import { useState } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';


const ListContainer = (props) => {
    const [stockActual,setstockActual] = useState(10)
    const restaStock = (e, RestaValor) => {
        setstockActual((stockActual-RestaValor)<0 ? stockActual : stockActual-RestaValor)
    }
    return (
        <>
            <div className="container-fluid ">
                <ItemCount stock={stockActual} initial={1} onAdd={restaStock} />
                <div className="row mx-0"><ItemList item={props.items} /></div>
            </div>
        </>
    )
}
export default ListContainer;