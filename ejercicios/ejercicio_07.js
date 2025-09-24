// Elegir
const addItemButton = document.getElementById('addItemButton');
const list = document.getElementById('myList');

let itemCounter = 0;
// Contador
function addNewItem() {
  itemCounter++;

  const newListItem = document.createElement('li');
    //Nueva clase
  newListItem.classList.add('list-item');

  list.appendChild(newListItem);

  console.log(`Element "${newListItem.textContent}" was added to the list.`);
}

addItemButton.addEventListener('click', addNewItem);
