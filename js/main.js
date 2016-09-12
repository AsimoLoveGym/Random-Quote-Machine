$(document).ready(function(){
  $("#requestQuote").on("click",function(){
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",function(json){
        $("#quote").html(json.quoteText);
        if (json.quoteAuthor) {
          $("#author").html("-  " + json.quoteAuthor);
        } else {
          $("#author").html("-  Anonymous Author");
        }
    });
  });
});
