// const handlers = ();
// const functions = ();


const handlers = (() => {
    const todosArray = [];
    const addTodo = function() {
        let todo = document.getElementById("new-todo-input")
        this.todosArray.push(todo.value)
        todo.value = "";
        this.updateTodos();
    };
    const updateTodos = function() {
        let todoList = document.getElementById("todo-list")
        todoList.innerHTML = "";
        this.todosArray.forEach((el) => {
            let listEle = document.createElement("li")
            listEle.innerText = el
            todoList.appendChild(listEle);
        })
    };
    return {todosArray, addTodo, updateTodos}
})();