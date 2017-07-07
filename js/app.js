$(document).ready(function() {

//Quotes generator
var quotes = [
  "Follow your heart, but take your brain with you.",
  "It is never too late to be what you might have been.",
  "Everything you can imagine is real.",
  "Life is 10% what happens to you and 90% how you react to it.",
  "It always seems impossible until it's done.",
  "If you think you can do it, you can.",
  "You only live once, but if you do it right, once is enough.",
  "Life isn't about finding yourself. Life is about creating yourself."
];

var author = [
  "Alfred Adler",
  "George Eliot",
  "Pablo Picasso",
  "Charles R. Swindoll",
  "Nelson Mandela",
  "John Burroughs",
  "Mae West",
  "George Bernard Shaw"
];
fetchQuote(quotes, author);

$('div.quotes button').on('click', function(q, a) {
  fetchQuote(quotes, author);
});


function fetchQuote(q, a){
  var quoteNum = Math.floor(Math.random() * quotes.length);
  $('.quoteBody').text('"' + q[quoteNum] + '"');
  $('.quoteAuthor').text('- ' + a[quoteNum]);
}

});
