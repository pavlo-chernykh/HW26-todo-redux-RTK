import { useDispatch, useSelector } from 'react-redux';
import { setfilter } from '../store/todoSlice';

export default function TodoFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.todo.filter);
  return (
    <ul className="filters">
      <li>
        <a
          href="/"
          className={filter === "all" ? "selected" : ""}
          onClick={(e) => {
            e.preventDefault();
            dispatch(setfilter({filter: 'all'}));
          }}
        >
          All
        </a>
      </li>
      <li>
        <a
          className={filter === "active" ? "selected" : ""}
          href="/active"
          onClick={(e) => {
            e.preventDefault();
            dispatch(setfilter({filter: 'active'}));
          }}
        >
          Active
        </a>
      </li>
      <li>
        <a
          className={filter === "completed" ? "selected" : ""}
          href="/completed"
          onClick={(e) => {
            e.preventDefault();
            dispatch(setfilter({filter: 'completed'}));
          }}
        >
          Completed
        </a>
      </li>
    </ul>
  );
}
