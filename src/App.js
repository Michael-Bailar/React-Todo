import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";


const todoList = [];

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
          <h1>To Do List</h1>
          <TodoForm addItem={this.addItem}/>
        </div>
        <div>
          <TodoList 
            todoList={this.state.todoList}
            toggleCompleted={this.toggleCompleted}
          />
        </div>
      </div>
    );
  }
}



export default App;
