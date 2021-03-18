import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useParams, useLocation} from "react-router-dom"
const ItemDetail = (props) => {

let query = useQuery();
return(
<>
{/* <div>EL id recibido es: {query.get("id")}</div> */}
<div>{props.totalDetail}</div>
</>
)}
function useQuery(){
    return new URLSearchParams(useLocation().search);
}

export default ItemDetail