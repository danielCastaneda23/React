import Item from './Item'
const ItemList = (props) => {
    console.log(props.item);
    return(
    props.item.map((x) => (
        <div className="col-3 mt-5 px-0">
            <ul key={x.toString()}>
                <Item item={x} />
            </ul>
        </div>
    ))
    )
    }
export default ItemList;