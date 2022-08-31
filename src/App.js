import "./styles.css";

import TodoHeader from "./components/TodoHeader.js";
import TodoToggleAll from "./components/TodoToggleAll";
import TodoFooter from "./components/TodoFooter";
import TodoList from "./components/TodoList";
import TodoAuth from "./components/TodoAuth";
import { useSelector, useDispatch } from "react-redux";
// import { setAuth } from "./store/userSlice";

export default function App() {
  // const dispatch = useDispatch();
  const isAuthed = useSelector(state => state.user.isAuthed)
  // const condition = !localStorage.getItem('token');
  // const token = useSelector(state => state.user.token)
  // console.log(token);
  // if (condition !== null) {
  //   dispatch(setAuth({isAuthed: true}))
  // }
  return (
    <section className="todoapp">
      {!isAuthed && <TodoAuth/>}
      {isAuthed && <section>
        <TodoHeader />
        <section className="main">
          <TodoToggleAll />
          <TodoList />
        </section>
        <TodoFooter />
      </section>}
    </section>
  );
}
