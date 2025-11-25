// create close button on each of the list item
let myNodeList = document.getElementsByTagName('li');
for (let i = 0; i < myNodeList.length; i++){
    let span = document.createElement('span');
    let txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

// click on a close button to hide the current list item
let close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++){
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = 'none';
    }
}

// add a checked symbol when clicking on item list
let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// create a new list item when clicking on the 'add' button
function newElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementById('myInput').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === ''){
        alert ('You must write something!');
    } else {
        document.getElementById('myUL').appendChild(li);
    }
    document.getElementById('myInput').value = '';

    let span = document.createElement('span');
    let txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++){
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = 'none';
        }
    }
}

// search bar feature
const searchBar = document.getElementById('searchBar');
const itemList = document.getElementById('myUL');
const items = document.getElementsByTagName('li');

searchBar.addEventListener('input', function() {
    const searchTerm = searchBar.value.toLowerCase();
    
    for (let i = 0; i < items.length; i++){
        const itemText = items[i].textContent.toLowerCase();

        if (itemText.includes(searchTerm)) {
            items[i].style.display = 'block';
        } else {
            items[i].style.display = 'none';
        }
    }
})