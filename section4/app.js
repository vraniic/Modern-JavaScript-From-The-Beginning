const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-task')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// Load all ecent listeners
loadEventListeners()

// Load all event lsitener
function loadEventListeners () {
    form.addEventListener('submit', addTask)
}

// Add task

function addTask (e) {
    if(taskInput.value === '') {
        alert('Add task')
    }

    // create il element
    const li = document .createElement('li')

    // Add class
    li.className

    // vreate text node and append to li
    li.appendChild(document.createElement)

    e.preventDefault()

}