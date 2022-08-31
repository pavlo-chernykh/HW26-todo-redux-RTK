import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, setToken } from "../store/userSlice";
import { useGetTokenMutation } from "../store/userAuthApi";

export default function TodoAuth() {
  const dispatch = useDispatch();
  const isAuthed = useSelector(state => state.user.isAuthed)
  
  const [getToken] = useGetTokenMutation();
  const [login, setLogin] = useState('');
  
  const authHandler = async (e) => {
    e.preventDefault();
    const email = login;
    if (email.length) {
      const {data: token} = await getToken({email});
      dispatch(setToken({token: token.access_token}))
      dispatch(setAuth({isAuthed: true}))
      localStorage.setItem('token', JSON.stringify({token: token.access_token}));
    }
  };



  return (
    <>
      {!isAuthed && <form
        className="signup-form"
        onSubmit={authHandler}
      >
        <input
          type="email"
          className="create-form__field"
          name="todoEmail"
          id="email"
          placeholder="Enter your email"
          onChange={(e) => setLogin(e.target.value.trim())}
        />
        <input
          type="password"
          className="create-form__field"
          name="todoPassword"
          id="password"
          placeholder="Enter your password"
          autoComplete="on"
        />
        <button className="create-form__submit" type="submit">
          Log in
        </button>
      </form>}
    </>
  );
}
