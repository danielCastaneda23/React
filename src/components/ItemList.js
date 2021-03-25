import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Item from './Item'
const ItemList = (props) => {
    const [newId, setNewId] = useState('1')
    useEffect(() => {
        if (props.idCategory != undefined) setNewId(props.idCategory)
    }, [props.idCategory])
    console.log(newId)
    return (
        props.item.map((x) => {
            if (x.domain_id === newId) {
                return (
                    <div className="col-2 px-0 my-4">
                        {console.log('primero')}
                        <Item item={x} />
                    </div>
                )
            }
            if (newId == '1'){
                return (
                    <div className="col-2 px-0 my-4">
                        {console.log('segundo')}
                        <Item item={x} />
                    </div>
                )
            }

        })
    )
}
export default ItemList;