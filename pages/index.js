import axios from "axios";
import { useEffect, useState } from "react";
import AddTodo from "../components/AddTodo";
import HomeLayout from "../Layout/HomeLayout";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/todos")
      .then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeTodos = (id) => {
    axios.delete(`/api/todos/${id}`).then((res) => {
      console.log(res.data.todos);
      setTodos(res.data.todos);
    });
  };

  const addTodo = (e, todo) => {
    e.preventDefault();
    console.log(todo);
    axios.post(`/api/todos/`, { todo }).then((res) => {
      console.log(res.data);
      setTodos(res.data.todos);
    });
  };

  if (loading) return <div>loading ...</div>;

  return (
    <HomeLayout>
      <div className="bg-red-200">
        <AddTodo
          addTodo={(e) => addTodo(e, todo)}
          value={(e) => setTodo(e.target.value)}
        />
        {todos.map((t) => {
          return (
            <div key={t.id} className="flex gap-10 mb-4">
              <div>{t.title}</div>
              <button onClick={() => removeTodos(t.id)} className="bg-red-500">
                delete
              </button>
            </div>
          );
        })}
      </div>
    </HomeLayout>
  );
}
