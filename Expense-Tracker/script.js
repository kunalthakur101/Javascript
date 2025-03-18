const expenseForm = document.getElementById("expense-tracker-form");
const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("expense-amount");
const expenseList = document.getElementById("expense-list");
const totalExpenseDisplay = document.getElementById("total-expense");
const expenseChart = document.getElementById("expenseChart").getContext("2d");

const expenseDate = document.getElementById("expense-date");

const filterDateInput = document.getElementById("filter-date");
const filterBtn = document.getElementById("filter-btn");

let expenses = []; // Store all expenses in an array
let chart;

expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let newExpense = {
    name: expenseName.value,
    amount: expenseAmount.value,
    date: expenseDate.value,
  };

  fetch("http://localhost:3000/expenses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newExpense),
  })
    .then((res) => res.json())
    .then(() => {
      fetchdetails(); // Refresh the expense list
      expenseName.value = "";
      expenseAmount.value = "";
      expenseDate.value = "";
    })
    .catch((err) => console.error(err));
});

fetchdetails();

function fetchdetails() {
  fetch("http://localhost:3000/expenses")
    .then((resp) => resp.json())
    .then((data) => {
      expenses = data;
      displayExpenses(data);
      calculateTotal(data);
      updateChart(data);
    })
    .catch((err) => console.log(err));
}

function displayExpenses(expenses) {
  expenseList.innerHTML = "";
  expenses.forEach((expense) => {
    let li = document.createElement("li");

    li.textContent = `${expense.name} : ₹${expense.amount} on ${new Date(
      expense.date
    ).toLocaleDateString()}`;

    let container = document.createElement("div");

    container.setAttribute("class", "contain-div");

    let btn = document.createElement("button");

    btn.textContent = "Delete";

    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    btn.style.padding = "5px";
    btn.style.border = "none";
    btn.style.borderRadius = "10px";

    btn.onclick = (e) => {
      e.preventDefault();
      fetch(`http://localhost:3000/expenses/${expense.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      expenseList.removeChild(li);
    };

    let editbtn = document.createElement("button");

    editbtn.textContent = "Edit";

    editbtn.style.backgroundColor = "grey";
    editbtn.style.color = "white";
    editbtn.style.padding = "5px";
    editbtn.style.border = "none";
    editbtn.style.marginRight = "10px";
    editbtn.style.borderRadius = "10px";

    editbtn.onclick = () => {
      editExpense(expense, li);
    };

    container.append(editbtn, btn);

    li.appendChild(container);

    expenseList.appendChild(li);
  });
}

function calculateTotal(expenses) {
  const total = expenses.reduce((acc, expense) => {
    return acc + Number(expense.amount);
  }, 0);

  totalExpenseDisplay.textContent = `₹${total}`;
}

function editExpense(expense, li) {
  // Ask the user for the new values (using prompt for simplicity)
  const newName = prompt("Edit Expense Name:", expense.name);
  const newAmount = prompt("Edit Expense Amount:", expense.amount);

  if (newName && newAmount) {
    // Update the expense object with the new data
    expense.name = newName;
    expense.amount = newAmount;

    // Update the expense in the JSON Server with a PUT request
    fetch(`http://localhost:3000/expenses/${expense.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense),
    })
      .then((response) => response.json())
      .then((updatedExpense) => {
        // Update the UI to reflect the edited expense
        li.innerHTML = `${updatedExpense.name}: ₹${updatedExpense.amount} `;

        // Re-add the Edit button after the content is updated
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit-btn");
        editButton.addEventListener("click", () => {
          editExpense(updatedExpense, li);
        });

        li.appendChild(editButton);
      })
      .catch((err) => console.error("Error updating expense:", err));
  }
}

function updateChart(expenses) {
  // Group expenses by category or create custom categories
  const categoryTotals = {};

  expenses.forEach((expense) => {
    if (categoryTotals[expense.name]) {
      categoryTotals[expense.name] += Number(expense.amount);
    } else {
      categoryTotals[expense.name] = Number(expense.amount);
    }
  });

  // Create chart data from the grouped totals
  const labels = Object.keys(categoryTotals);
  const data = Object.values(categoryTotals);

  const backgroundColors = data.map(() => getRandomColor());

  // Destroy previous chart if exists
  if (chart) {
    chart.destroy();
  }

  // Create a new chart
  chart = new Chart(expenseChart, {
    type: "doughnut",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Amount Spent per Category",
          data: data,
          backgroundColor: backgroundColors,
          borderColor: backgroundColors,
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

filterBtn.addEventListener("click", () => {
  const selectedDate = filterDateInput.value;

  if (selectedDate) {
    const filteredExpenses = expenses.filter((expense) => {
      // Ensure the date is in the correct format (YYYY-MM-DD)
      const expenseDate = expense.date
        ? new Date(expense.date).toISOString().split("T")[0]
        : null;

      // Check if the date is valid
      if (isNaN(new Date(expenseDate))) {
        console.error("Invalid date:", expenseDate);
        return false; // Skip invalid dates
      }

      // Compare the selected date with the expense date
      return expenseDate === selectedDate;
    });

    displayExpenses(filteredExpenses);
    calculateTotal(filteredExpenses);
    updateChart(filteredExpenses);
  } else {
    // If no date is selected, show all expenses
    displayExpenses(expenses);
    calculateTotal(expenses);
    updateChart(expenses);
  }
});
