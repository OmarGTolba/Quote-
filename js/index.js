
var Quotes = [
  {
    quote: "He who does not live in the way of his beliefs starts to believe in the way he lives.",
    name: "Umar ibn Al-Khattab"
  },
  
  {
    quote:"If you tell the truth, you don't have to remember anything.",
    name: "Mark Twain"
  },
  
  {
    quote:
"Suffering is a gift. In it is hidden mercy.",
    name: "Rumi"
  },
  
  {
    quote:
"Life isn't about finding yourself. Life is about creating yourself.",
    name: " George Bernard Shaw"
  },
  
  {
    quote:
"A wise man first thinks and then speaks and a fool speaks first and then thinks.",
    name: " Ali ibn Abu-Talib" 
  },
  
  {
    quote:
  "Ask no questions and you will be told no lies.",
    name: "Charles Dickens"
  },
  
  {
    quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    name: "Albert Einstein"
  },
  
  {
    quote:"You talk when you cease to be at peace with your thoughts.",
    name: "Kahlil Gibran"
  },
  
  {
    quote:"There is nothing either good or bad, but thinking makes it so.",
        name: " William Shakespear"
  },
  
  {
    quote:"Never let your sense of morals prevent you from doing what is right.",
    name: " Isaac Asimov,"
  }
]

function newQuote(){
  var i= Math.floor(Math.random() * Quotes.length);
  document.getElementById("Quote").innerHTML = ` 
  <p> ${ "\""+Quotes[i].quote +"\""}</p>
  <p> ${"\-"+Quotes[i].name}</p>`
}