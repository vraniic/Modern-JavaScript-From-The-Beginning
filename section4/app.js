// const form = document.querySelector('#task-form')
// const taskList = document.querySelector('.collection')
// const clearBtn = document.querySelector('.clear-task')
// const filter = document.querySelector('#filter')
// const taskInput = document.querySelector('#task')

// // Load all ecent listeners
// loadEventListeners()

// // Load all event lsitener
// function loadEventListeners () {
//     form.addEventListener('submit', addTask)
// }

// // Add task

// function addTask (e) {
//     if(taskInput.value === '') {
//         alert('Add task')
//     }

//     // create il element
//     const li = document .createElement('li')

//     // Add class
//     li.className

//     // vreate text node and append to li
//     li.appendChild(document.createElement)

//     e.preventDefault()

// }




function calculateResults(e){
  console.log('Calculating...');
  
  
  const amount = document.getElementById('amount');
  
  const interest = document.getElementById('interest');
  
  const years = document.getElementById('years');
  
  const monthlyPayment = document.getElementById('monthly-payment');
  
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
  } else {
    showError('Please check your numbers');
  }

// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';

  e.preventDefault();
}}