/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import  Styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems }) => {
  return (
    <div className={Styles.itemsContainer}>
     {todoItems.map((item)=>(
      <TodoItem key={item} todoDate={item.dueDate} todoName={item.name}></TodoItem>
     )) }
    </div>
  );
};
export default TodoItems;
