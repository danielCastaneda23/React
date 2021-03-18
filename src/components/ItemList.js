import Item from './Item'
const ItemList = (props) => {
    console.log(props.item);
    // let Elements=props.item.map((x)=>{return x.thumbnail});
    // for(let i=0;i<props.item.length;i++) {Elements.push(props.item[i].thumbnail)}
    // console.log(Elements)
    return(
        props.item.map((x) => (
        <div className="col-2 px-0 my-4">
                <Item item={x} />
        </div>
        ))
    )
    }
export default ItemList;