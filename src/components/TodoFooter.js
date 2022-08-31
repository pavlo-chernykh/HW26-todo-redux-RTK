import TodoItemsLeft from "./TodoItemsLeft";
import TodoFilter from "./TodoFilter";
import TodoCompleted from "./TodoCompleted";
import { useSelector } from "react-redux";
import { useGetTodosQuery } from "../store/todoApi";

export default function TodoFooter() {
  const token = useSelector(state => state.user.token);
  const {data: todos = []} = useGetTodosQuery(token);
  return (
    todos.length > 0 &&  <footer className="footer">
      <TodoItemsLeft />
      <TodoFilter />
      <TodoCompleted />
    </footer>
  );
}
