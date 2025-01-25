const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuote = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];@@@@@@
  @@@@

//Loding
function loading(isTrue) {
  loader.hidden = !isTrue;###
  quoteContainer.hidden = isTrue;
}

//Get single Quote
function setQuote() {
  loading(true);
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  if (quote.text.length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.innerText = quote.text;
  quoteAuthor.textContent = quote.author.split(",")[0];
  loading(false);
}

// Get Quotes from api
async function getQuote() {
  const URL = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    loading(true);
    const responce = await fetch(URL);
    apiQuotes = await responce.json();
    setQuote();
  } catch (error) {
    console.log(error);
  }
}

// Tweet on Tweeter
function tweet() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event listeners
newQuote.addEventListener("click", setQuote);
twitterBtn.addEventListener("click", tweet);

// On load
getQuote();
