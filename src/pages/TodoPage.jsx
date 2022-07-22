import { useState } from "react";
import InputList from "../components/InputList";
import TodoList from "../pages/atoms/TodoList";
import { addTodoList } from "../hooks/hook-list";



function TodoPage() {


  const [todoLists, setTodoLists] = useState([]);

  const setTodoList = (nameTodo) => {
    setTodoLists((prevList) => {
      return [...prevList, { titleTodo: nameTodo, id: listIds }];
    });
  };
  var [listIds, setListIds] = useState(0);
  const setListId = () => {
    setListIds((listIds += 1));
  };


function handleDeleteList(itemId) {
  setTodoLists(todoLists.filter((del) => del.id !== itemId))
}

  return (
    <div className="App">
      <div className="header">
        <h1>Todo ECF-front</h1>

        <InputList
          key={"Addlist"}
          name={"Addlist"}
          todoLists={todoLists}
          setTodoList={setTodoList}
          setListId={setListId}
          addTodoList={addTodoList}
        />
      </div>
      <div className="body">
        {todoLists.map((thisTodoList) => (
          <TodoList key={todoLists.id}
          handleDeleteList={handleDeleteList} thisTodoList={thisTodoList} />
        ))}
      </div>
    </div>
  );
}

export default TodoPage;
