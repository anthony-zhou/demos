// Get DOM elements for quote and attribution
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');

// The API url
const url = 'https://type.fit/api/quotes';

async function getQuote() {        
    // Make request to API
    const response = await fetch(url);
    
    // Store response, converted to object from JSON String
    const data = await response.json();

    // The response should be an array of quotes:
    // Get a random index
    let randomIndex = Math.floor(Math.random() * data.length);

    const quoteText = data[randomIndex].text;
    const quoteAuthor = data[randomIndex].author;

    // Display the quote text and author on the site
    quoteElement.innerText = quoteText;
    authorElement.innerText = quoteAuthor;
}

const forismaticURL = "https://cors-anywhere-12345.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
async function getForismaticQuote() {        
    // Make request to Forismatic API
    const response = await fetch(forismaticURL);
    
    // Store response, converted to object from JSON String
    const data = await response.json();

    const quoteText = data.quoteText;
    const quoteAuthor = data.quoteAuthor;

    // Display the quote text and author on the site
    quoteElement.innerText = quoteText;
    authorElement.innerText = quoteAuthor;
}

// getForismaticQuote();
getQuote();


const container = document.getElementById('container');
document.body.onload = function () {
    // Generate a random seed [0, 1000)
    let seed = Math.floor(Math.random() * 1000);
    let linearGradient = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )";
    container.style.backgroundImage = `${linearGradient}, url('https://picsum.photos/seed/${seed}/640/360')`;
}