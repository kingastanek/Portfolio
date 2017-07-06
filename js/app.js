$(document).ready(function() {

//Quotes generator
var quotes = [
  "Follow your heart, but take your brain with you.",
  "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
  "It is never too late to be what you might have been.",
  "Everything you can imagine is real."
];

var author = [
  "Alfred Adler",
  "Marilyn Monroe",
  "George Eliot",
  "Pablo Picasso"
];
fetchQuote(quotes, author);

$('div.quotation button').on('click', function(q, a) {
  fetchQuote(quotes, author);
})

function fetchQuote(q, a){
  var quoteNum = Math.floor(Math.random() * quotes.length);
  $('.quoteBody').text('"' + q[quoteNum] + '"');
  $('.quoteAuthor').text('- ' + a[quoteNum]);
}

//footer - show mail
var mailIcon = $('.fa-envelope-o');

mailIcon.on('click', function(){
  $(this).next().toggleClass('hidden');
});

});
