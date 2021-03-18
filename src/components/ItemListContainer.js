import ItemList from './ItemList';


const ListContainer = (props) => {
    return (
        <>
            <div className="container-fluid ">
                <div className="row mx-0"><ItemList item={props.items} /></div>
            </div>
        </>
    )
}
export default ListContainer;