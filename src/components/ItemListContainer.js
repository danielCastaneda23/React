import { useState } from 'react';
import ItemCount from './ItemCount';

const ListContainer = (props) => {
    const [stockActual,setstockActual] = useState(10)
    const restaStock = (e, RestaValor) => {
        setstockActual((stockActual-RestaValor)<0 ? stockActual : stockActual-RestaValor)
    }
    return (
        <>
            <div className="container-fluid ">
                <div className="row mx-0 justify-content-center"> <div style={{ color: 'blue' }}>{props.greeting}</div></div>
                <ItemCount stock={stockActual} initial={1} onAdd={restaStock} />
            </div>
        </>
    )
}
export default ListContainer;