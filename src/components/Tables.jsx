import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodo,
  finishedTodo,
  notfinishedTodo,
  updateTodoStatus,
} from "../redux";

const Tables = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const finishedTask = (id) => {
    dispatch(finishedTodo(id));
  };

  const deleteTask = (id) => {
    dispatch(deleteTodo(id));
  };

  const notFinishedTask = (id) => {
    dispatch(notfinishedTodo(id));
  };

  const editTask = (id) => {
    dispatch(updateTodoStatus(id));
  };

  return (
    <table className="table table-borderd">
      <thead>
        <tr>
          <th>No.</th>
          <th>Todo Item</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className={item.status == 0 ? "table-info" : ""}>
            <td> {index + 1} </td>
            <td> {item.todo} </td>
            <td> {item.status == 1 ? "in progress" : "completed"} </td>
            <td className="button-space">
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={() => deleteTask(item.id)}
              >
                Delete
              </button>
              &nbsp;
              {item.status == 1 ? (
                <button
                  type="button"
                  className="btn btn-outline-success btn-sm"
                  onClick={() => finishedTask(item.id)}
                >
                  Finished
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline-success btn-sm"
                  onClick={() => notFinishedTask(item.id)}
                >
                  Not Finished
                </button>
              )}
              &nbsp;
              <button
                type="button"
                className="btn btn-outline-warning btn-sm"
                onClick={() => editTask(item.id)}
              >
                Update
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tables;
