const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const completedList = document.getElementById('completedList');
addTaskButton.addEventListener('click', function () {
    let taskText = taskInput.value.trim();
    if (taskText !== "") {
        let li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="done-btn">Done</button> 
            <button class="delete-btn">Delete</button>
        `;

        li.querySelector('.done-btn').addEventListener('click', function () {
            li.remove();
            let completedLi = document.createElement('li');
            completedLi.innerHTML = `
                <span class="done">${taskText}</span>
                <button class="delete-btn">Delete</button>
            `;

            completedLi.querySelector('.delete-btn').addEventListener('click', function () {
                completedLi.remove();
            });

            completedList.appendChild(completedLi);
        });

        li.querySelector('.delete-btn').addEventListener('click', function () {
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert('Please enter a task !');
    }
});
