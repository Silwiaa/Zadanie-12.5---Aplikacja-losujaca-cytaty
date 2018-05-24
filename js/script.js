$(function () {
    // VARIABLE tweetLink AND quoteuRL
    var prefix = "https://cors-anywhere.herokuapp.com/",
        tweetLink = "https://twitter.com/intent/tweet?text=",
        quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

    // getQuote FUNCTION
    function getQuote() {
        $.getJSON(prefix + quoteUrl, createTweet);
        $.ajaxSetup({ cache: false });
    }
    
    // SET getQuote FUNCTION WHEN WEB LOADED
    $(document).ready(function () {
        getQuote();
    $('.trigger').click(function () {
        getQuote();        
        });
    });

    // createTweet FUNCTION
    function createTweet(input) {
        var data = input(0),
            quoteText = $(input.content).text().trim(),
            quoteAuthor = data.title;

        if (!quoteAuthor.lenght) {
            quoteAuthor = "Unknown author";
        }

        var tweetText = "Quote of the day - " + quoteText + " Author: " + quoteAuthor;

        if (tweetText.length > 140) {
        getQuote();
        } else {
            var tweet = tweetLink + encodeURIComponent(tweetText);
            
            $('.quote').text(quoteText);
            $('.author').text("Author:" + quoteAuthor);
            $('.tweet').attr('href', tweet);
        }
    }
});