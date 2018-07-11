// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
    {
        quote: 'I have no special talent. I am only passionately curious.',
        author: 'Albert Einstein',
    },
    {
        quote: 'Quality is not an act, it is a habit.',
        author: 'Aristotle',
    },
    {
        quote: 'Well done is better than well said.',
        author: 'Benjamin Franklin',
    },
    {
        quote: 'Believe you can and you"re halfway there',
        author: 'Theodore Roosevelt',
    },
    {
        quote: 'Stay hungry, stay foolish.',
        author: 'Steve Jobs',
    }
]

function randomQuoteGenerator(){
    var random = Math.floor(Math.random()*5);
    var quoteGen = quotes[random].quote;
    return quoteGen;
}
function printQuote(){
    var quotation = randomQuoteGenerator();

    for(var i = 0;i<quotes.length;i++){
        if (quotation === quotes[i].quote){
            var auth = quotes[i].author;
        }
    }

    
    document.querySelector('.quote').innerHTML = quotation;
    document.querySelector('.source').innerHTML = auth;
};

