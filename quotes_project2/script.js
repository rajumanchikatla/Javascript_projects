const quotes = [
    {quoteText: "The only way to do great work is to love what you do.", author: 'Steve Jobs'},
    {quoteText: "In the middle of difficulty lies opportunity.", author: 'Albert Einstein'},
    {quoteText: "Believe you can and you're halfway there.", author: 'Theodore Roosevelt'},
    {quoteText: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: 'Winston Churchill'},
    {quoteText: "The future belongs to those who believe in the beauty of their dreams.", author: 'Eleanor Roosevelt'},
    {quoteText: "It does not matter how slowly you go as long as you do not stop.", author: 'Confucius'},
    {quoteText: "The only limit to our realization of tomorrow will be our doubts of today.", author: 'Franklin D. Roosevelt'},
    {quoteText: "Strive not to be a success, but rather to be of value.", author: 'Albert Einstein'},
    {quoteText: "Your time is limited, don't waste it living someone else's life.", author: 'Steve Jobs'},
    {quoteText: "We may encounter many defeats but we must not be defeated.", author: 'Maya Angelou'},
    {quoteText: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: 'Nelson Mandela'},
    {quoteText: "The only impossible journey is the one you never begin.", author: 'Tony Robbins'},
    {quoteText: "Everything you've ever wanted is on the other side of fear.", author: 'George Addair'},
    {quoteText: "You are never too old to set another goal or to dream a new dream.", author: 'C.S. Lewis'},
    {quoteText: "Don't watch the clock; do what it does. Keep going.", author: 'Sam Levenson'},
    {quoteText: "Success is walking from failure to failure with no loss of enthusiasm.", author: 'Winston Churchill'},
    {quoteText: "The way to get started is to quit talking and begin doing.", author: 'Walt Disney'},
    {quoteText: "I attribute my success to this: I never gave or took any excuse.", author: 'Florence Nightingale'},
    {quoteText: "The best revenge is massive success.", author: 'Frank Sinatra'},
    {quoteText: "The future depends on what you do today.", author: 'Mahatma Gandhi'},
    {quoteText: "If you want to lift yourself up, lift up someone else.", author: 'Booker T. Washington'},
    {quoteText: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: 'Zig Ziglar'},
    {quoteText: "Nothing in the world can take the place of persistence.", author: 'Calvin Coolidge'},
    {quoteText: "Life is 10% what happens to us and 90% how we react to it.", author: 'Charles R. Swindoll'},
    {quoteText: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: 'William Butler Yeats'},
    {quoteText: "Opportunities don't happen. You create them.", author: 'Chris Grosser'},
    {quoteText: "The only way to do great work is to love what you do.", author: 'Steve Jobs'},
    {quoteText: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: 'Albert Schweitzer'},
    {quoteText: "The only limit to our realization of tomorrow will be our doubts of today.", author: 'Franklin D. Roosevelt'},
    {quoteText: "Don't watch the clock; do what it does. Keep going.", author: 'Sam Levenson'},
    {quoteText: "The best way to predict the future is to create it.", author: 'Peter Drucker'},
    {quoteText: "The only place where success comes before work is in the dictionary.", author: 'Vidal Sassoon'},
    {quoteText: "The best revenge is massive success.", author: 'Frank Sinatra'},
    {quoteText: "You miss 100% of the shots you don't take.", author: 'Wayne Gretzky'},
    {quoteText: "The future depends on what you do today.", author: 'Mahatma Gandhi'},
    {quoteText: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: 'Albert Schweitzer'},
    {quoteText: "The only limit to our realization of tomorrow will be our doubts of today.", author: 'Franklin D. Roosevelt'},
    {quoteText: "Don't watch the clock; do what it does. Keep going.", author: 'Sam Levenson'},
    {quoteText: "The best way to predict the future is to create it.", author: 'Peter Drucker'},
    {quoteText: "The only place where success comes before work is in the dictionary.", author: 'Vidal Sassoon'},
    {quoteText: "The best revenge is massive success.", author: 'Frank Sinatra'},
    {quoteText: "You miss 100% of the shots you don't take.", author: 'Wayne Gretzky'},
    {quoteText: "The future depends on what you do today.", author: 'Mahatma Gandhi'},
    {quoteText: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: 'Albert Schweitzer'},
    {quoteText: "The only limit to our realization of tomorrow will be our doubts of today.", author: 'Franklin D. Roosevelt'},
    {quoteText: "Don't watch the clock; do what it does. Keep going.", author: 'Sam Levenson'},
    {quoteText: "The best way to predict the future is to create it.", author: 'Peter Drucker'},
    {quoteText: "The only place where success comes before work is in the dictionary.", author: 'Vidal Sassoon'},
    {quoteText: "The best revenge is massive success.", author: 'Frank Sinatra'},
    {quoteText: "You miss 100% of the shots you don't take.", author: 'Wayne Gretzky'},
    {quoteText: "The future depends on what you do today.", author: 'Mahatma Gandhi'},
    {quoteText: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: 'Albert Schweitzer'},
    {quoteText: "The only limit to our realization of tomorrow will be our doubts of today.", author: 'Franklin D. Roosevelt'},
    {quoteText: "Don't watch the clock; do what it does. Keep going.", author: 'Sam Levenson'},
    {quoteText: "The best way to predict the future is to create it.", author: 'Peter Drucker'},
    {quoteText: "The only place where success comes before work is in the dictionary.", author: 'Vidal Sassoon'},
    {quoteText: "The best revenge is massive success.", author: 'Frank Sinatra'},
    {quoteText: "You miss 100% of the shots you don't take.", author: 'Wayne Gretzky'}
];

window.onload =() =>{
    Getquote();
};
let quote_text = document.getElementById('quote-text');
let author_name = document.getElementById('author-name');

function Getquote(){
    for(let i=0;i<100;i++){
        const randomquote = Math.floor(Math.random()*quotes.length);
        quote_text.innerText = quotes[randomquote].quoteText;
        author_name.innerText=quotes[randomquote].author;
    }
}