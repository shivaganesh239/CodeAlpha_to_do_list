// Get references to your HTML elements
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value;

    if (taskText.trim() !== "") {
        // Create a new list item
        const li = document.createElement("li");

        // Create a new span for the task name
        const taskName = document.createElement("span");
        taskName.textContent = taskText;

        // Create a new span for the date of entry
        const entryDate = document.createElement("span");
        entryDate.textContent = new Date().toLocaleString(); // Get the current date and time

        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        // Add an event listener to the delete button
        deleteButton.addEventListener("click", function () {
            todoList.removeChild(li); // Remove the task when the delete button is clicked
        });

        // Append the task name, entry date, and delete button to the list item
        li.appendChild(taskName);
        li.appendChild(entryDate);
        li.appendChild(deleteButton);

        // Append the list item to the to-do list
        todoList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }
}

// Event listener for the "Add" button
addButton.addEventListener("click", addTask);
