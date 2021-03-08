import { Component } from "react";

class ListContainer extends Component {
    render() {
        return (
            <>
                <div className="container-fluid ">
                    <div className="row justify-content-center">
                        <div style={{ color: 'blue' }}>{this.props.greeting}</div>
                    </div>
                </div>
            </>
        )
    }
}
export default ListContainer;