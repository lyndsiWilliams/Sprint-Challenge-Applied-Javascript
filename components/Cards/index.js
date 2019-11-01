// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


// HTTP GET request
axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(response => {
        const getArticles = Object.values(response.data.articles);
        const cardsContainer = document.querySelector('.cards-container');
        getArticles.forEach(item => {
            item.forEach(item => {
                cardsContainer.appendChild(createCard(item));
            })
        })
    })


// Component function
function createCard(getInfo) {

    // Element definition
    const card = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const author = document.createElement('div');
    const imgCont = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');


    // Appending children to their parents
    card.append(headlineDiv, author);
    author.append(imgCont, authorName);
    imgCont.appendChild(img);


    // Class names
    card.classList.add('card');
    headlineDiv.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');


    // Content

    headlineDiv.textContent = getInfo.headline;
    img.src = getInfo.authorPhoto;
    authorName.textContent = getInfo.authorName;


    return card;
}