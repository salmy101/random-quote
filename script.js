const quoteElement = document.getElementById('quote')
const quoteBtn = document.getElementById('quoteBtn')



generateQuote()

function generateQuote() {
  const config = {
    mode: 'no-cors',
    headers: {
      "Content-Type": "application/json",
    }
  }

  fetch('https://zenquotes.io/api/random', config)
  .then(res => res.json())
  .then((data) => {
    console.log(data) 
    // jokeEl.innerHTML = data.joke
  })
}