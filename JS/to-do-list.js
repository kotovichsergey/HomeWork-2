let addButton = document.getElementById("add"),
    inputTask = document.getElementById("new-task"),
    unfinishedTasks = document.getElementById("unfinished"),
    finishedTasks = document.getElementById("finished"),
	deleteAllButton = document.getElementById("delete");

	//создаёт новое дело со всеми эелементами
function createNewElement(task) {
    let listItem = document.createElement('li'),
        checkbox = document.createElement('button'),
        label = document.createElement('label'),
        input = document.createElement('input'),
        editButton = document.createElement('button'),
        deleteButton = document.createElement('button');

    checkbox.className = "icons checkbox";
    checkbox.innerHTML = '<i class="far fa-square"></i>';
    label.innerText = task;
    input.type = "text";
    editButton.className = "icons edit";
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    deleteButton.className = "icons delete";
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(input);
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);

    return listItem;
}
	//добавляет новое дело
function addTask() {
    if (inputTask.value) {
        let listItem = createNewElement(inputTask.value);
        unfinishedTasks.appendChild(listItem);
        bindTaskEvents(listItem, finishTasks);
        inputTask.value = "";
    }
}
addButton.onclick = addTask; //добавление по кнопке
inputTask.onkeyup = function(e) {
	if (e.keyCode == 13) addTask(); //добавление по клавише Enter
}

	//удаляет дело
function deleteTask(){
    let listItem = this.parentNode,
        ul = listItem.parentNode;
    ul.removeChild(listItem);
}

	//включает режим редактирования названия дела
function editTask(){
    let editButton = this,
        listItem = this.parentNode,
        label = listItem.querySelector("label"),
        input = listItem.querySelector("input[type=text]"),
        containsClass = listItem.classList.contains("editMode");

    if (containsClass) {
        label.innerText = input.value;
        editButton.className = "icons edit";
        editButton.innerHTML = '<i class="fas fa-edit"></i>'
    } else {
        input.value = label.innerText;
        editButton.className = "icons save";
        editButton.innerHTML = '<i class="fas fa-save"></i>'
    }

    listItem.classList.toggle("editMode");
}

	//добавляет дело в список текущих дел
function unfinishTasks(){
    let listItem = this.parentNode,
        checkbox = listItem.querySelector("button.checkbox");
    checkbox.className = "icons checkbox";
    checkbox.innerHTML = '<i class="far fa-square"></i>';

    unfinishedTasks.appendChild(listItem);
    bindTaskEvents(listItem, finishTasks);
}

	//добавляет дело в список завершённых дел
function finishTasks(){
    let listItem = this.parentNode,
		checkbox = listItem.querySelector("button.checkbox");
	checkbox.className = "icons checkbox";
    checkbox.innerHTML = '<i class="far fa-check-square"></i>';

	finishedTasks.appendChild(listItem);
	bindTaskEvents(listItem, unfinishTasks);
}

	//обработчик событий
function bindTaskEvents(listItem, checkboxEvent){
    let checkbox = listItem.querySelector("button.checkbox"),
        editButton = listItem.querySelector("button.edit"),
        deliteButton = listItem.querySelector("button.delete");
    checkbox.onclick = checkboxEvent;
    editButton.onclick = editTask;
    deliteButton.onclick = deleteTask;
}

	//очищает весь список
function deleteAllList() {
    let listFinished = document.getElementById('finished'),
        listUnfinished = document.getElementById('unfinished');
    listFinished.innerHTML = "";
    listUnfinished.innerHTML = "";
}
deleteAllButton.onclick = deleteAllList;

