import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rep_password, setrepPassword] = useState("");

  const register = async () => {
    await axios.post("/todo/register", {
      username: username,
      password: password,
      email: email,
    });
  };

  return (
    <div className="flex flex-col gap-10 bg-white items-center w-[600px] h-[700px] border-2 rounded-sm shadow-md bg-gradient-to-r from-indigo-500 to-blue-400">
      <h1 className="mt-[40px]">Sign up</h1>
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

          <div class="form-outline mb-4">
            <input
              type="password"
              id="form3Example4cdg"
              class="form-control form-control-lg"
              placeholder="Repeat your password"
              onChange={(e) => {
                setrepPassword(e.target.value);
              }}
            />
          </div>

          <div class="form-check d-flex justify-content-center mb-5">
            <input
              class="form-check-input me-2"
              type="checkbox"
              value=""
              id="form2Example3cg"
            />
            <label class="form-check-label" for="form2Example3g">
              I agree all statements in{" "}
              <a href="#!" class="text-body">
                <u>Terms of service</u>
              </a>
            </label>
          </div>

          <div class="d-flex justify-content-center">
            <button class="btn bg-white" onClick={register}>
              Register
            </button>
          </div>

          <p class="text-center text-muted mt-5 mb-0">
            <h3 className="text-black">Already have an account?</h3>
            <Link to="/login" className="text-black">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
