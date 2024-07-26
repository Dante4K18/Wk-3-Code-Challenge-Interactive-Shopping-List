let shoppingList = []; 
function renderList() {
    const listContainer = document.getElementById('listContainer');
    listContainer.innerHTML = '';

    shoppingList.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name;
        listItem.classList.toggle('purchased', item.purchased);
        listItem.addEventListener('click', () => togglePurchased(index));
        listContainer.appendChild(listItem);
    });
}
function addItem() {
    const itemInput = document.getElementById('itemInput');
    const newItem = itemInput.value.trim();
    if (newItem !== '') {
        shoppingList.push({ name: newItem, purchased: false });
        itemInput.value = '';
        renderList();
    }
}

function togglePurchased(index) {
    shoppingList[index].purchased = !shoppingList[index].purchased;
    renderList();
}

function clearList() {
    shoppingList = [];
    renderList();
}

document.getElementById('addButton').addEventListener('click', addItem);
document.getElementById('clearButton').addEventListener('click', clearList);
renderList();
