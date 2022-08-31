import { useDeleteTodoMutation, useToggleTodoMutation, useUpdateTodoMutation } from "../store/todoApi";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function TodoItem({_id, checked, value}) {
  const token = useSelector(state => state.user.token);
  const [deleteTodo] = useDeleteTodoMutation();
  const [toggleTodo] = useToggleTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const [valueState, setValue] = useState('');
  const [edit, setEdit] = useState(false);

  const classNameEdit = edit ? "editing" : "";
  const classNameCompleted = checked ? "completed" : "";
  const className = `${classNameEdit} ${classNameCompleted}`;

  const handler = async (e) => {
    e.preventDefault();
    setEdit(false);
    await updateTodo({ id: _id, value: valueState, token });
  };
  const destroyHandler = async() => {
    await deleteTodo({id: _id, token});
  };

  return (
    <li id={_id} className={className}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={checked}
          onChange={async() => await toggleTodo({id: _id, token})}
        />
        <label
          onDoubleClick={() => {
            setEdit(true);
          }}
        >
          {value}
        </label>
        <button className="destroy" onClick={() => destroyHandler()}></button>
      </div>
      <input
        type="text"
        className="edit"
        value={valueState}
        ref={(inputElement) => {
          if (inputElement) {
            inputElement.focus();
          }
        }}
        onChange={({ target }) => setValue(target.value)}
        onKeyDown={ (e) => {
          if (e.key === "Escape") {
            handler(e);
          }
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handler(e);
          }
        }}
        onBlur={(e) => handler(e)}
      />
    </li>
  );
}
