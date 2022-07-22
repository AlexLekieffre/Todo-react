export function addTodo(setTodo , setIdTodo){
    setIdTodo()
    setTodo()
}

export function toggleTodo(todos , todo , majTodo){
    const newTask = [...todos];
    const upTodo = todos.find((todos) => todos.id === todo.id);
    upTodo.complete = !upTodo.complete;
    majTodo(newTask);
}   