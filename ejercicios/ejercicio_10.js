const targetElement = document.getElementById('target-child');
const parentInfo = document.getElementById('parent-info');
const childrenInfo = document.getElementById('children-info');
const nextSiblingInfo = document.getElementById('next-sibling-info');
const targetElementInfo = document.getElementById('target-element-info');

targetElementInfo.textContent = `id: ${targetElement.id}`;
// Padres
const parentElement = targetElement.parentElement;
parentInfo.textContent = `id: ${parentElement.id}`;

// Hijo
const childElements = parentElement.children;
let childrenText = '';
for (let i = 0; i < childElements.length; i++) {
    if (childElements[i].tagName === 'UL') {
        const listItems = childElements[i].children;
        for (let j = 0; j < listItems.length; j++) {
            childrenText += `<li>${listItems[j].textContent}</li>`;
        }
    }
}
childrenInfo.innerHTML = `<ul>${childrenText}</ul>`;

// Hermano
const nextSiblingElement = document.getElementById('child-list').nextElementSibling;
nextSiblingInfo.textContent = `id: ${nextSiblingElement.id}, ${nextSiblingElement.textContent}`;
