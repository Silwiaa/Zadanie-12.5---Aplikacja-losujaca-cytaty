// VARIABLE tweetLink AND quoteuRL
var tweetLink = "https://twitter.com/intent/tweet?text=",
    quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

// getQuote FUNCTION
function getQuote() {
    $getJSON(quoteUrl, createTweet);
}

// createTweet FUNCTION
function createTweet(input) {
    var data = input(0),
        quoteText = $(input.content).text().trim(),
        quoteAuthor = data.title;
    
    if(!quoteAuthor.lenght) {
        quoteAuthor = "Unknown author";
    }
}