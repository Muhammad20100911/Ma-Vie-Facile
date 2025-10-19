// --- Planificateur ---
function addTask() {
  const input = document.getElementById("taskInput");
  const list = document.getElementById("taskList");
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    li.onclick = () => li.classList.toggle("done");
    list.appendChild(li);
    input.value = "";
  }
}

// --- Eau ---
let water = 0;
function drinkWater() {
  if (water < 8) {
    water++;
    document.getElementById("waterCount").textContent = water;
  }
}

// --- Dépenses ---
let total = 0;
function addExpense() {
  const amount = parseFloat(document.getElementById("expenseAmount").value);
  const desc = document.getElementById("expenseDesc").value;
  const list = document.getElementById("expenseList");
  if (!isNaN(amount) && desc.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = `${desc} : ${amount} €`;
    list.appendChild(li);
    total += amount;
    document.getElementById("totalExpense").textContent = total.toFixed(2);
  }
}

// --- Bien-être ---
const tips = [
  "Fais une pause de 5 minutes pour respirer.",
  "Étire-toi un peu, tes muscles te remercieront.",
  "Bois un grand verre d’eau maintenant.",
  "Souris ! Même sans raison.",
  "Éteins ton téléphone pendant 10 minutes."
];
function showTip() {
  const tip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("tip").textContent = tip;
}

// --- Repas ---
const meals = [
  "Pâtes aux légumes",
  "Omelette au fromage",
  "Salade de poulet",
  "Soupe de légumes maison",
  "Riz sauté aux œufs"
];
function showMeal() {
  const meal = meals[Math.floor(Math.random() * meals.length)];
  document.getElementById("meal").textContent = meal;
}
