// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

// Grab parent element
const headerContainer = document.querySelector('.header-container');

// Append
headerContainer.appendChild(Header());

// Component function
function Header() {

    // Element definition
    const headerDiv = document.createElement('div');
    const date = document.createElement('span');
    const h1 = document.createElement('h1');
    const temp = document.createElement('span');
    const getDate = new Date();


    // Appending children to their parents
    headerDiv.append(date, h1, temp);


    // Class names
    headerDiv.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');


    // Content
    date.textContent = getDate.toDateString();
    h1.textContent = 'Lambda Times';
    temp.textContent = '98°';


    return headerDiv;
}