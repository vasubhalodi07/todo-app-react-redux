import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import { addTodo, updateTodo } from "../redux";

const FormFiled = () => {
  const data = useSelector((state) => state.data);
  const updateState = useSelector((state) => state.updateState);
  const dispatch = useDispatch();
  const [form, setForm] = useState("");

  useEffect(() => {
    const updatedItem = data.find((item) => item.id === updateState);
    if (updatedItem) {
      setForm(updatedItem.todo);
    } else {
      setForm("");
    }
  }, [data, updateState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateState == 0) {
      if (form.trim() != "") {
        dispatch(addTodo(form));
        setForm("");
      }
    } else {
      if (form.trim() != "") {
        dispatch(updateTodo(updateState, form));
        setForm("");
      }
    }
  };

  return (
    <div>
      <h6 className="formfiled-title"> Todo App using React-Redux </h6> <br />
      <Form
        className="formfiled-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Form.Control
          type="text"
          placeholder="Task"
          value={form}
          onChange={(e) => setForm(e.target.value)}
        />
        &nbsp;
        <button type="submit" className="btn btn-outline-primary btn-sm gap">
          {updateState == 0 ? "Add" : "Edit"}
        </button>
      </Form>
    </div>
  );
};

export default FormFiled;
