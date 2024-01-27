/* eslint-disable react/no-unknown-property */
function AddTodo() {
  return (
    <div class="container items-container ">
      <div class="row d-row">
        <div class="col-6">
          <input type="text" placeholder="Enter ToDO Here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success d-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
