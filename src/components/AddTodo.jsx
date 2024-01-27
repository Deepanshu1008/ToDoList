import  Styles from "./TodoItems.module.css";
function AddTodo() {
  return (
    <div className={`${Styles.itemsContainer} container`}>
      <div className="row d-row">
        <div className="col-6">
          <input type="text" placeholder="Enter ToDO Here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success d-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
