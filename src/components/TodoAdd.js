import { useState } from "react";
import { useAddTodoMutation } from "../store/todoApi";
import { useSelector } from 'react-redux';

export default function TodoAdd() {
  const token = useSelector(state => state.user.token);
  const [value, setValue] = useState('');
  const [addTodo] = useAddTodoMutation();

  const addHander = async(e) => {
    if ((e.key === "Enter" || e.key === "Tab") && value.trim()) {
      e.preventDefault();
      await addTodo({text: value, token: token});
      setValue('');
    }
  };
  return (
    <input
      value={value}
      className="new-todo"
      placeholder="What needs to be done?"
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={addHander}
    />
  );
}
