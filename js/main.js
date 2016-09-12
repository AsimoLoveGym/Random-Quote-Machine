var quote = "";
var author = "Anonymous Author";

$(document).ready(function(){
  $("#requestQuote").on("click",function(){
    var requestQuote = function() {
    return $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
      headers: {
        'X-Mashape-Key': 'hZiK86xXVPmshgK1yR6VHfAH4DSQp1BOYJJjsnJqVHSNQxJwCJ'
      },
      method: 'POST',
      contentType: 'application/x-www-form-urlencoded',
      dataType: 'json',
    })
    };
    requestQuote().done(function(data){
      ;
      quote = data.quote;
      $("#quote").html(quote);
      if (data.author) {
        author = data.author;
        $("#author").html("  -- " + data.author);
      } else {
        $("#author").html("  -- Anonymous Author");
      }
    });
  });

  $("#social").on("click", function(){
    quote = $("#quote").html();
    author = $("#author").html();
    window.open("https://twitter.com/intent/tweet?text=" + quote + author);
  });
});
