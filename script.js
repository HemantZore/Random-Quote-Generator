const text = document.querySelector('.qoutes');
const author = document.querySelector('.author');
const nextBtn = document.querySelector('.next');
const tweetBtn = document.querySelector('.twitter-share-button');

const getQuote = async () => {
    const res = await fetch('https://type.fit/api/quotes');
    const quotes = await res.json();
    const num = Math.floor(Math.random()
        * quotes.length);
    const item = quotes[num];
    const qoutes = item.text;
    const authorName = item.author;
    text.innerText = qoutes;
    author.innerText = authorName;
    tweetBtn.href = 'https://twitter.com/intent/tweet?text=${qoutes}' - $(authorName)


}
nextBtn.addEventListener('click', getQuote)
getQuote()
