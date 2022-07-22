import React, { useState } from "react";

export default function InputList({ name, setTodoList, addTodoList, setListId,  }) {
  const [nameTodo, setNameTodo] = useState("");

  return (
    <div className="inputList">
      <form action="">
        <input type="text" placeholder="Titre liste" maxLength={25} id="titlelist" onChange={(e) => setNameTodo(e.target.value)} />
        <button
          onClick={(e) => {
            e.preventDefault();
            if(nameTodo !== ''){
            addTodoList(nameTodo, setListId, setTodoList);
            document.getElementById("titlelist").value = "";
            setNameTodo("")
          }}}
        >
          {name}
        </button>
      </form>
    </div>
  );
}
