import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

const Item = (props) => <>
<Card>
    <Card.Img></Card.Img>
    <Card.Body>
        <Card.Title>{props.item}</Card.Title>
        <Card.Text>Hi</Card.Text>
        <Button variant="primary">Click</Button>
    </Card.Body>
</Card>
</>
export default Item;