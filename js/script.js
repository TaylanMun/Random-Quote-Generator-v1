/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "I hope you're pleased with yourselves. We could all have been killed — or worse, expelled. Now if you don't mind, I'm going to bed.", 
    source: "Hermione Granger",
    citation: "Harry Potter and the Sorcerer's Stone",
    year: "2001",
    saidto: ""
  },
  {
    quote: "It does not do well to dwell on dreams and forget to live.", 
    source: "Albus Dumbledore",
    citation: "Harry Potter and the Sorcerer's Stone",
    year: "2001",
    saidto: "Harry Potter"
  },
  {
    quote: "Dobby is free.", 
    source: "Dobby",
    citation: "Harry Potter and the Chamber of Secrets",
    year: "2002",
    saidto: "Lucius Malfoy"
  },
  {
    quote: "Don’t let the muggles get you down.", 
    source: "Ron Weasley",
    citation: "Harry Potter and the Prisoner of Azkaban",
    year: "2004",
    saidto: ""
  },
  {
    quote: "Your devotion is nothing more than cowardice. You would not be here if you had anywhere else to go.", 
    source: "Voldemort",
    citation: "Harry Potter and the Goblet of Fire",
    year: "2005",
    saidto: ""
  }
];



/***
 * `getRandomQuote` function
***/
function getRandomQuote(quotesArr){
  const randomNumberForQuotes = Math.floor(Math.random() * quotesArr.length);
  if (randomNumberForQuotes in quotesArr){
    return quotesArr[randomNumberForQuotes];
  }
  return false;
}


/***
 * `printQuote` function
***/
function printQuote(){
  const randomQuote = getRandomQuote(quotes);
  let saidTo = "";
  if(randomQuote["saidto"] !== ""){
    saidTo = `( to ${randomQuote["saidto"]})`;
  }
  if(randomQuote){
    return document.getElementById("quote-box").innerHTML = `
    <p class="quote">${randomQuote["quote"]}</p>
    <p class="source">
    ${randomQuote["source"]} ${saidTo}
          <span class="citation">${randomQuote["citation"]}</span>
      <span class="year">${randomQuote["year"]}</span>
    </p>
    `;
  }
}

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);