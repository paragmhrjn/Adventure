// function expression to select elemnt
const selectElement = (s) => document.querySelector(s);

//Open the menu on click

selectElement('.open').addEventListener('click', (s) => {
    selectElement('.nav-list').classList.add('active');
});

//Close the menu on click

selectElement('.close').addEventListener('click', (s) => {
    selectElement('.nav-list').classList.remove('active');
});