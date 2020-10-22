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
        let liId = 0;
        this.todosArray.forEach((el) => {
            let listEle = document.createElement("li")
            listEle.id = liId;
            let liDeleteButton = document.createElement("button")
            liDeleteButton.id = liId;
            let liToggleButton = document.createElement("button")
            liToggleButton.id = liId;
            let liCheckbox = document.createElement("input");
            liCheckbox.id = liId;
            liCheckbox.type = "checkbox"
            listEle.innerText = el
            liDeleteButton.innerHTML = "Delete"
            liToggleButton.innerHTML = "Toggle"
            todoList.appendChild(listEle);
            listEle.appendChild(liDeleteButton);
            listEle.appendChild(liToggleButton);
            listEle.appendChild(liCheckbox); 
            liId++;          
        });
    };
    const deleteTodo = function() {
        //add onclick to delete buttons.
    };
    return {todosArray, addTodo, updateTodos, deleteTodo}
})();