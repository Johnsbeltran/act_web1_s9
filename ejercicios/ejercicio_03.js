// Selector
let listElements = document.getElementsByClassName('lists');

///styles
for (let i = 0; i < listElements.length; i++) {
    listElements[i].style.backgroundColor = '#f0f0f0'; 
    listElements[i].style.border = '1px solid #dd4a4aff';
    listElements[i].style.padding = '10px';
}

// number of elemets
let numberOfElements = listElements.length;

console.log(`Hay ${numberOfElements} elementos con la clase "lists".`);
