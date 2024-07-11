const shoppingList = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

const addToList = function() {
    groceryItem = input.value;
    input.value = '';
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    listItem.appendChild(span);
    listItem.appendChild(deleteButton);
    span.textContent = groceryItem;
    deleteButton.textContent = 'Delete';
    shoppingList.appendChild(listItem);
    input.focus();
    };

button.addEventListener("click", addToList);