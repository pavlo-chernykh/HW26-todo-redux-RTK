import { useGetTodosQuery, useToggleTodoMutation } from "../store/todoApi";
import { useSelector } from "react-redux";

export default function TodoToggleAll() {
  const token = useSelector(state => state.user.token);
  const {data: todos = []} = useGetTodosQuery(token);
  const [toggleTodo] = useToggleTodoMutation();

  const handleToggleAll = async (todos) => {
    const checkCompleted = !!todos.find((todo) => !todo.checked);
    const toggledIds = [];
    todos.forEach((todo) => {
      if (todo.checked === !checkCompleted) {
        toggledIds.push(todo._id);
      }
    });

    for (const id of toggledIds) {
      await toggleTodo({id, token})
    }
  }


  return (
    <>
      <input id="toggle-all" className="toggle-all" type="checkbox" onClick={ async()=> await handleToggleAll(todos) } />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  );
}
