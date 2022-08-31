import { useGetTodosQuery, useDeleteTodoMutation } from "../store/todoApi";
import { useSelector } from "react-redux";
function TodoCompleted() {
  const token = useSelector(state => state.user.token);
  const {data: todos = []} = useGetTodosQuery(token);

  const [clearCompleted] = useDeleteTodoMutation();

  const isCompleted = todos.filter((todo) => todo.checked).length;

  const handleDeleteAll = async (todos) => {
    const completedTodos = todos.filter((todo) => todo.checked);
    for (const task of completedTodos) {
      await clearCompleted({id: task._id, token})
    }
  }

  

  return (
    isCompleted > 0 && <button className="clear-completed" onClick={async () => await handleDeleteAll(todos)} >Clear completed</button>
  );
}
export default TodoCompleted;
