import { useEffect, useState } from 'react';
import Item from './Item'
const ItemList = (props) => {
    const [newId, setNewId] = useState('1')
    useEffect(() => {
        if (props.idCategory !== undefined) setNewId(props.idCategory)
    }, [props.idCategory])
    return (
        props.item.map((x) => {
            if (x.domain_id === newId) {
                return (
                    <div key={x.toString} className="col-2 px-0 my-4">
                        <Item item={x} />
                    </div>
                )
            }
            if (newId === '1'){
                return (
                    <div key={x.id} className="col-2 px-0 my-4">
                        <Item item={x} />
                    </div>
                )
            }

        })
    )
}
export default ItemList;