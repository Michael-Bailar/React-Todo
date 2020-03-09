import React from "react";
import Todo from "./Todo";
import {Button} from "reactstrap";

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todoList.map(item => (
                <Todo
                    key={item.id}
                    item={item}
                    toggleCompleted={props.toggleCompleted}
                />
            ))}
            <Button className="clear-button" onClick={props.clearCompleted} block>
                Clear Completed Items
            </Button>
        </div>
    )
}

export default TodoList;