import React from "react";
import {Button, Input} from "reactstrap";

class TodoForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            item: ''
        };
    }

    handleChange = e => {
        this.setState({
            item: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({
            item: ''
        });
    }

    
    render() {
        
        return (
            <form onSubmit={this.handleSubmit}>
                <Input 
                    type="text"
                    name="item"
                    value={this.state.item}
                    onChange={this.handleChange}
                />
                <Button block>Add Item</Button>
            </form>
        )
    }
}

export default TodoForm;