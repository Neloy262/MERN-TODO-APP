import { useEffect, useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";

import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "./components/Login";
import Modal from "./components/Modal";

function App() {
  const [todos, setTodo] = useState([]);
  const [loggedIn, setLogin] = useState("justify-center");
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState("");

  const [modalIsOpen, setModal] = useState("hidden");
  const [todoId, setTodoID] = useState("");

  const refresh = () => {
    setTodo([]);
  };

  const openModal = (id) => {
    setModal("flex");
    setTodoID(id);
  };

  const closeModal = () => {
    setModal("hidden");
  };

  const getUser = (username) => {
    setLogged(true);
    setUser(username);
    setLogin("");
  };

  async function fetchData() {
    try {
      const todo = await axios.get(`/todo/${user.data}`);
      setTodo(todo.data);
    } catch (err) {
      console.log(err.message);
    }
  }
  function deleteData(btn) {
    axios
      .post(`/todo/delete`, {
        user_id: user.data,
        todo_id: btn.target.id,
      })
      .then((response) => {
        setTodo([]);
      });
  }

  function updateData(updatedText) {
    axios
      .post(`/todo/update`, {
        user_id: user.data,
        todo_id: todoId,
        title: updatedText,
      })
      .then((response) => {
        setTodo([]);
      })
      .then((response) => closeModal());
  }

  useEffect(() => {
    if (logged && todos.length === 0) {
      fetchData();
    }
  }, [todos, user]);
  // useEffect(() => {
  //   if (logged) {
  //     fetchData();
  //   }
  // }, [todos]);

  return (
    <Router>
      <div
        className={`App flex flex-col ${loggedIn} items-center bg-gray-100 h-screen w-screen`}
      >
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute loggedin={logged}>
                <TaskInput
                  userid={user.data}
                  refresh={refresh}
                  todos={todos}
                  deleteData={deleteData}
                  openModal={openModal}
                />
                <Modal
                  view={modalIsOpen}
                  close={closeModal}
                  updateData={updateData}
                />
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login getUser={getUser} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
