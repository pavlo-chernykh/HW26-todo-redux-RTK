import TodoItem from "./TodoItem";
import { useGetTodosQuery } from "../store/todoApi";
import { useSelector } from "react-redux";

export default function ToDoList() {
  const filter = useSelector(state => state.todo.filter)
  const token = useSelector(state => state.user.token);
  const {
    data: todos = [],
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetTodosQuery(token);

  const filteredTodos = (todos) => {
    if (filter === 'active') {
        return todos.filter((todo) => !todo.checked);
    }

    if (filter === 'completed') {
        return todos.filter((todo) => todo.checked);
    }

    return todos;
};
  let content;

  if (isLoading) {
    content = <p>Loading...</p>
  } else if(isSuccess) {
    content = filteredTodos(todos).map(todo => {
      return (
        <TodoItem
          key={todo._id}
          {...todo}
        />
      );
    })
  } else if(isError) {
    content = <p>{error}</p>
  }


  return (
    <ul className="todo-list">
      {content}
    </ul>
  );
}
