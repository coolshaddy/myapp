import "./App.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodo, deleteTodo, selectSelectedTodos, selectTodos, updateTodo } from "./todoSlice";

function App() {
  const [title, setTitle] = useState("");
  const [update, setUpdate] = useState(null);

  const todos = useSelector(selectTodos);
  const selectedTodoss = useSelector(selectSelectedTodos);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  // console.log(todos);

  return (
    <>
      <input type="text" value={title} onChange={handleChange} />
      <button
        onClick={() => {
          if (!update) {
            dispatch(addTodo({ title, id: Date.now() }));
          } else {
            dispatch(updateTodo({ title, index: update }));
          }
          setTitle("");
        }}
      >
        {update ? "Update Todo" : "Add Todo"}
      </button>

      {todos.length > 0 ? (
        todos.map((todo, todoIndex) => {
          return (
            <div key={todoIndex}>
              <p>{todo.title}</p>
              <button onClick={() => dispatch(deleteTodo(todoIndex))}>
                Delete
              </button>
              <button
                onClick={() => {
                  setTitle(todo.title);
                  setUpdate(todoIndex);
                }}
              >
                Update
              </button>
            </div>
          );
        })
      ) : (
        <p>No todos</p>
      )}
    </>
  );
}

export default App;
