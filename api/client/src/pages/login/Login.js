import { useContext, useState } from "react";
import "./login.scss";
import { AuthContext } from "../../context/AuthContext";
import axios  from "axios";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config";

function Login() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  })

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      console.log(res)
      navigate(-1);
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  }


  return (
    <div className="login">
      <div className="lContainer">
        <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput" />
        <input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput" />
        <button disabled={loading} onClick={handleClick} className="lButton">Login</button>
        <p>* Exclusive to clients</p>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  )
}

export default Login
