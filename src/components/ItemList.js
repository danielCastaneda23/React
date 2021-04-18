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
                    <div className="col-3 mx-n4">
                        <Item item={x} />
                    </div>
                )
            }
            if (newId === '1'){
                return (
                    <div className="col-3 mx-n4">
                        <Item item={x} />
                    </div>
                )
            }

        })
    )
}
export default ItemList;