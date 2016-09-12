var quote = "";
var author = "Anonymous Author";

$(document).ready(function(){
  $("#requestQuote").on("click",function(){
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",function(json){
        quote = json.quoteText;
        $("#quote").html(quote);
        if (json.quoteAuthor) {
          author = json.quoteAuthor;
          $("#author").html("  -- " + json.quoteAuthor);
        } else {
          $("#author").html("  -- Anonymous Author");
        }
    });
  });
});

function twitterOut() {
  quote = $("#quote").html();
  author = $("#author").html();
  window.open("http://twitter.com/intent/tweet?text=" + quote + author);
}
