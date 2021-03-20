import { Link } from 'react-router-dom';
import Item from './Item'
const ItemList = (props) => {
    return(
        props.item.map((x) => (
        <div className="col-2 px-0 my-4">
                <Item item={x} />
        </div>
        ))
    )
    }
export default ItemList;