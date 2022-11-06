const quoteElement = document.getElementById('quote')
const quoteBtn = document.getElementById('quoteBtn')


quoteBtn.addEventListener('click', generateQuote)
generateQuote()

function generateQuote() {
  // const config = {
  //   // mode: 'no-cors',
  //   headers: {
  //     "Accept": "application/json",
  //   }
  // }

  fetch('http://api.quotable.io/random')
  .then(res => 
    res.json()
  )
  .then((data) => {
    quoteElement.innerHTML = data.content
  })
}