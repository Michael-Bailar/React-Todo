import React from "react";
import Todo from "./Todo";

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
            <button className="clear-button" onClick={props.clearCompleted}>
                Clear Completed Items
            </button>
        </div>
    )
}

export default TodoList;