/* eslint-disable react/no-unknown-property */
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: 'Buy milk',
      dueDate:'4/10/2023',
    },
    {
      name:'Buy Coffee',
      dueDate:'22/11/2023'
    },
    {
      name:'Play Games',
      dueDate:'Right now',
    }
  ];
  return (
  <center className="todo-container">
    <AppName/>
    <AddTodo/>
    <TodoItems todoItems={todoItems}></TodoItems>
  
  
  </center>
  );
}

export default App;
