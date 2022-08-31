import TodoAdd from "./TodoAdd";
import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "../store/userSlice";

export default function TodoHeader() {
  const dispatch = useDispatch();
  const isAuthed = useSelector(state => state.user.isAuthed)

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(setAuth({isAuthed: false}))
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <TodoAdd />
      {isAuthed && <button
        className="logout_btn"
        type="submit"
        onClick={handleLogout}
      >
        Log out
      </button>}
    </header>
  );
}
