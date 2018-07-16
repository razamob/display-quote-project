// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//array of objects containing quote and author
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
        citation: "Poor Richard's Almanack",
        year: '1737'
    },
    {
        quote: 'Believe you can and you"re halfway there',
        author: 'Theodore Roosevelt',
    },
    {
        quote: 'Stay hungry, stay foolish.',
        author: 'Steve Jobs',
        citation: 'Stanford Commencement',
        year: '2005'
    }
]

//function created to generate a random quote from the array
function getRandomQuote(){
    //random variable stores random number up to 4
    var random = Math.floor(Math.random()*quotes.length);
    //selects random quote
    var quoteGen = quotes[random].quote;
    return quoteGen;
}
function printQuote(){
    //store string from randomQuoteGenerator in quotation variable
    var quotation = getRandomQuote();

    //for loop that cycles through array
    for(var i = 0;i<quotes.length;i++){
        //check if quote stored in quotation is equal to quote in position of object
        if (quotation === quotes[i].quote){
            //store the author of that quote in auth variable
            var auth = quotes[i].author;
            //check if year and citation are not undefined
            if(quotes[i].year !== undefined && quotes[i].citation !== undefined){
                //store year in year variable and citation in citations variable
                years = quotes[i].year;
                citations = quotes[i].citation;
                //add span to paragraph with source class
                document.querySelector('.source').innerHTML = auth + "<span>" + ", " + years + "</span>" + "<span>" + ", " + citations + "</span>";
            }
            else{
                //otherwise only add author
                document.querySelector('.source').innerHTML = auth;
            }
        }
    }
    //update div with quotation
    document.querySelector('.quote').innerHTML = quotation;
};

