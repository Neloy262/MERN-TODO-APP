import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Login(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const login = async (e) => {
    e.preventDefault();
    await axios.post("/todo/login", {
      username: username,
      password: password,
      email: email,
    });

    const user_id = await axios.post("/todo/getUser", {
      username: username,
      email: email,
    });

    props.getUser(user_id);
    setSuccess(true);
    console.log(user_id);
  };

  useEffect(() => {
    if (success === true) {
      navigate("/");
    }
  }, [success, navigate]);

  return (
    <div className="flex flex-col gap-10 bg-white items-center w-[500px] h-[600px] border-2 rounded-sm shadow-md bg-gradient-to-r from-indigo-500 to-blue-400">
      <h1 className="mt-[40px]">Login</h1>
      <div>
        <form>
          <div class="form-outline mb-4">
            <input
              type="text"
              id="form3Example1cg"
              class="form-control form-control-lg"
              placeholder="Your Name"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>

          <div class="form-outline mb-4">
            <input
              type="email"
              id="form3Example3cg"
              class="form-control form-control-lg"
              placeholder=" Your Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div class="form-outline mb-4">
            <input
              type="password"
              id="form3Example4cg"
              class="form-control form-control-lg"
              placeholder=" Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div class="d-flex justify-content-center">
            <button class="btn bg-white" onClick={login}>
              Log in
            </button>
          </div>

          <p class="text-center text-muted mt-5 mb-0">
            <h3 className="text-black">Dont have an account?</h3>
            <Link to="/register" className="text-black">
              Sign up here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
