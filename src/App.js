import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import 'bootstrap/dist/css/bootstrap.min.css';


const todoList = [
  {
    name: "Click this item to mark complete",
    id: 111,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todoList: todoList,
      name: ''
    }
  }

  toggleCompleted = itemId => {
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }

  clearCompleted = itemId => {
    this.setState({
      todoList: this.state.todoList.filter(item => {
        if (item.completed === true) {
          return ''
        } else {
          return item;
        }
      })
    })
  }

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: new Date(),
      purchased: false
    };
    this.setState({
      todoList: [...this.state.todoList, newItem]
    });
  };

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">

        <div>
          <h1>Sweet To Do List</h1>
          <TodoForm addItem={this.addItem}/>
        </div>
        <div>
          <TodoList 
            todoList={this.state.todoList}
            toggleCompleted={this.toggleCompleted}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}



export default App;
