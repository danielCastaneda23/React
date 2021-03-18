import { useState } from "react"
import ItemDetail from "./ItemDetail"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemDetailContainer = (props) => {
    const [detailItem, setDetailItem] = useState('')
    const getItem = () => {
        new Promise((Bien, Mal) => {
            setTimeout(() => {
                Bien(props.titleDetail);
            }, 2000)
        }).then((resultado) => setDetailItem(resultado))
    }

    return (
        <>
            <div className="row mx-0">
                <div className="col-12 text-center">
                {/* <Link to={`/new?id=${detailItem}`}><Button onClick={() => getItem()}>Detalle Producto</Button></Link> */}
                <Button onClick={() => getItem()}>Detalle Producto</Button>
                </div>
            </div>
            <ItemDetail totalDetail={detailItem} />
        </>
    )
}
export default ItemDetailContainer;