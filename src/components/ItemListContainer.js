import { useParams } from 'react-router';
import ItemList from './ItemList';
const ListContainer = (props) => {
    let { id } = useParams();
    return (
        <>
            <div className="row mx-0"><ItemList item={props.items} idCategory={id} /></div>
        </>
    )
}
export default ListContainer;