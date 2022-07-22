import React from "react";
import { useState } from "react";
import { addTodo } from "../hooks/hook-todo";
import Todo from "../pages/atoms/Todo";

export default function InputTodo({id}) {
  const [nameTodo, setNameTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const setTodo = () => {
    setTodos((prevList) => {
      return [
        ...prevList,
        { titleTodo: nameTodo, id: idTodos, complete: false },
      ];
    });
  };
  const majTodo = (newTask) => {
    setTodos(newTask);
  };

  var [idTodos, setIdTodos] = useState(0);
  const setIdTodo = () => {
    setIdTodos((idTodos += 1));
  };

  function handleDeletetodo(itemId) {
    setTodos(todos.filter((del) => del.id !== itemId))
  }

  return (
    <div>
      <form action="">
        <input type="text" placeholder="titre todo" maxLength={25}  name="todotitle" onChange={(e) => setNameTodo(e.target.value)} />
        <button
          onClick={(e) => {
            e.preventDefault();
            if(nameTodo !== ""){
            addTodo(setTodo, setIdTodo);
          }
          }}
        >
          Add todo
        </button>
      </form>
      <div className="todo">
        <div className="todo-a-faire">
          <h2>todo a faire</h2>
          {todos
            .filter((todo) => !todo.complete)
            .map((todo) => (
              <Todo majTodo={majTodo}  todos={todos} todo={todo} />
            ))}
        </div>
        <div className="todo-fait">
          <h2>todo fini</h2>
          {todos
            .filter((todo) => todo.complete)
            .map((todo) => (
              <Todo majTodo={majTodo} handleDeletetodo={handleDeletetodo} todos={todos} todo={todo} />
            ))}
        </div>
      </div>
    </div>
  );
}
