// ========================
// Section Tâches
// ========================
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task !== '') {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
    taskInput.value = '';
  }
});

// ========================
// Section Eau
// ========================
let waterCount = 0;
const drinkWaterBtn = document.getElementById('drink-water');
const waterCountDisplay = document.getElementById('water-count');

drinkWaterBtn.addEventListener('click', () => {
  waterCount++;
  waterCountDisplay.textContent = `${waterCount} verre${waterCount > 1 ? 's' : ''}`;
});

// ========================
// Section Repas
// ========================
const addMealBtn = document.getElementById('add-meal');
const mealList = document.getElementById('meal-list');

addMealBtn.addEventListener('click', () => {
  const meal = prompt('Quel repas as-tu pris ?');
  if (meal && meal.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = meal;
    mealList.appendChild(li);
  }
});

// ========================
// Section Dépenses
// ========================
const expenseInput = document.getElementById('expense-amount');
const addExpenseBtn = document.getElementById('add-expense');
const expenseList = document.getElementById('expense-list');

addExpenseBtn.addEventListener('click', () => {
  const amount = parseFloat(expenseInput.value);
  if (!isNaN(amount) && amount > 0) {
    const li = document.createElement('li');
    li.textContent = `${amount.toFixed(2)} €`;
    expenseList.appendChild(li);
    expenseInput.value = '';
  }
});
