const quote_bank = [
  {
    quote: 'So many books, so little time.',
    author: '- Frank Zappa',
  },
  {
    quote: 'Be yourself; everyone else is already taken.',
    author: '- Oscar Wilde',
  },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    author: '- Mae West',
  },
  {
    quote: 'Be the change that you wish to see in the world.',
    author: '- Mahatma Gandhi',
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: '- Robert Frost',
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: '- Mark Twain',
  },
  {
    quote: 'A friend is someone who knows all about you and still loves you.',
    author: '- Elbert Hubbard',
  },
  {
    quote: 'We accept the love we think we deserve.',
    author: '- Stephen Chbosky',
  },
  {
    quote: 'Without music, life would be a mistake.',
    author: '- Friedrich Nietzsche',
  },
  {
    quote:
      'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
    author: '- Ralph Waldo Emerson',
  },
]

window.onload = load()
function load() {
  generateQuote()
}

function generateQuote() {
  let randomNumber = Math.floor(Math.random() * quote_bank.length)
  let randomData = quote_bank[randomNumber]

  let twitterLink =
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Your%20time%20is%20limited%2C%20so%20don%E2%80%99t%20waste%20it%20living%20someone%20else%E2%80%99s%20life.%22%20Steve%20Jobs'

  document.getElementById('tweet-quote').href = twitterLink
  document.getElementById('text').innerText = randomData.quote
  document.getElementById('text').style.letterSpacing = '1.2px'
  document.getElementById('author').innerText = randomData.author
}

