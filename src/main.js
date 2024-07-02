//Fetch the items form the JSON file
function loadItems() {
    return fetch('data/data.json').then(response => response.json() )
    .then(json => json.items);   
}


//main
loadItems()
.then(items => {
    displayItems(items);
    setEventListeners(items)
})
//Fetch the items form the JSON file
function loadItems() {
    return fetch('data/data.json').then(response => response.json() )
    .then(json => json.items);   
}

function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(item) {
    return `
    <li class="item">
      <img src="img/blue_t.png" alt="${item.type}" class="item_thumbail"/>
      <span class="item__description">${item.gender}, ${item.size}</span>
    </li>    
    `
}

function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key
    const value = dataset.value;

    if(key == null || value == null) {
        return;
    }

    displayItems(items.filter(item => item[key] === value));
}

function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons')
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', () => onButtonClick(event, items));
}

//main
loadItems()
.then(items => {
    displayItems(items);
    setEventListeners(items)
})
.catch(console.log);