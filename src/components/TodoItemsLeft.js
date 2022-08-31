import { useGetTodosQuery } from '../store/todoApi'
import { useSelector } from 'react-redux';

function TodoItemsLeft() {
  const token = useSelector(state => state.user.token);
  const {data: todos = []} = useGetTodosQuery(token);
  const todosLeft = todos.reduce((acc, todo) => {
    if (!todo.checked) {
      acc++;
    }
    return acc;
  }, 0);
  return (
    <span className="todo-count">
      <strong>{todosLeft}</strong> items left
    </span>
  );
}

export default TodoItemsLeft;
