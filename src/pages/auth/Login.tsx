import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { login } from "../../features/user/userSlice";
import "./Login.css";

type AuthUser = {
  email: string;
  password: string;
};

function Login() {
  const [user, setUser] = useState<AuthUser>({
    email: "",
    password: "",
  });

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newUser: AuthUser = {
      email: user.email,
      password: user.password,
    };

    dispatch(login(newUser));

    navigate(-1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ padding: "0" }} className="auth-container">
      <div className="form-container">
        <h1>Login</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </main>
  );
}

export default Login;
