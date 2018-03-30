//function to get random quotes from forismatic API
$(document).ready(function(){

  //variables for style changes
  var color1 = "black";
  var color2 = "white";
  var textStyle = "";
  var quoteBoxStyle = "";
  var quoteTextStyle = "";
  var portLinkStyle = "";

  $("#getQuote").on("click",function(){
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=en",
    function(quote){
      //correct title
      $("h1").html("Quotes of Wisdom");
      //append quote
      $(".quote").html("&quot" + quote.quoteText + "&quot");
      //append author
      $("#author").attr("style", "font-weight: normal; font-style: italic; \
                        font-size: 4vw;")
      if(quote.quoteAuthor){
        $(".author").html("-" + quote.quoteAuthor);
      }
      //if no author credit to unknown
      else{
        $("#author").html("-unknown");
      }

    $("#tweetBtn").attr("href", "https://twitter.com/intent/tweet?text=" +
                        $("#quoteContainer").text());

    });

    //gen random numbers for rgb color
    var colNum1 = Math.floor(Math.random() * 255);
    var colNum2 = Math.floor(Math.random() * 255);
    var colNum3 = Math.floor(Math.random() * 255);
    var colNum4 = Math.floor(Math.random() * 255);
    var colNum5 = Math.floor(Math.random() * 255);
    var colNum6 = Math.floor(Math.random() * 255);

    //change colors from start
    if(color1 == "black" && color2 == "white"){
      color1 = "rgb(" + colNum1 + ", " + colNum2 + ", " + colNum3 + ")";
      color2 = "rgb(" + colNum4 + ", " + colNum5 + ", " + colNum6 + ")";
    }
    //change colors again
    else{
      color2 = color1;
      color1 = "rgb(" + colNum1 + ", " + colNum2 + ", " + colNum3 + ")";
    }
    var background = "background: linear-gradient(to top right, "
                      + color1 + ", " + color2 + ");"

    $("body").attr("style", background);

    //change quote box style

    quoteBoxStyle = "background: rgba(0, 0, 0, 0.2); \
                      border: solid 5px rgba(255,255,255,0.5); \
                      box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);"
    quoteTextStyle = "color: white; text-shadow: -1px 0 rgba(255,255,255,0.5); \
                      font-family: 'PT Sans', sans-serif;"
    var buttonStyle = "color: white; font-family: 'PT Sans', sans-serif;";

    $("#container").attr("style", quoteBoxStyle);
    $("#quoteContainer").attr("style", quoteTextStyle);
    $("h1").attr("style", quoteTextStyle);
    $(".buttons").attr("style", "background: rgba(255,255,255,0.5);")
    $(".btn").attr("style", "color: white;");
    $("#tweetBtn").attr("style", buttonStyle);
    $(".portfolioLink").attr("style", "color: white;")

    portLinkStyle = "color: white; -webkit-text-stroke: 2px rgba(255,255,255,0.2);"
    $(".heroLogo").attr("style", portLinkStyle);

    //change background text color
    textStyle = "background-color: transparent; color: rgba(255,255,255,0.2); \
                     text-shadow: none; \
                     -webkit-background-clip: none; -moz-background-clip: none; \
                     background-clip: none;"

    $("#backgroundQuote p").attr("style", textStyle);

  });

  $("#trumpify").on("click", function(){
    //get current quote and author
    var q = $("#quote").text();
    var a = $("#author").text().replace("-", "");
    //remove quotes""
    var qWords = q.replace('"', "'").replace('"', "'");
    //turn into array
    qWords = qWords.split(" ");
    if(qWords != "" && qWords[0]){
      var trumpWords = ["Bigly", "Yuge", "...Believe Me...", "Honestly",
                        "stupid", "smart", "Loser", "Moron", "We", "They",
                        "Great","Fire and Fury", "Incredible", "on both sides",
                        "men and women", "Covfefe", "Fake news", "folks",
                        "Tremendous", "A lot of Money", "Classy",
                        "millions and billions", "you'll find out", "winning",
                        "No Collusion", "Tremendous", "weak", "strong", "zero",
                        "amazing", "rich", "Ivanka", "Putin", "Russia", "Sad!"]
      //number of words to change
      var max = qWords.length/2;
      var numOfChanges = Math.floor(Math.random() * (max - 1)) + 1;
      for(var i = 0; i < numOfChanges; i++){

        var quoteLength = qWords.length;

        //choose which word in quote to change
        var numOfWordToChange = Math.floor(Math.random() * quoteLength);

        //choose random word from trumpWords
        var numOfTrumpWord = Math.floor(Math.random() * trumpWords.length);

        //change word
        qWords[numOfWordToChange] = trumpWords[numOfTrumpWord];
      }

      //add trump words
      if(a == "unknown"){
        qWords.unshift("You know...");
      }
      else{
        qWords.unshift(" &quot I Believe " + a +
                        " said...well someone told me... ");

      }
      qWords.push("..believe me folks...&quot");
      qWords = qWords.join(" ");
      $("#quote").html(qWords);
      $("h1").html("Quotes of Winning?");
      $("#author").attr("style", "font-weight: bold; font-style: normal; \
                        font-size: 6vw;" );
      $("#author").html("-TRUMP");

      //update text for tweet
      $("#tweetBtn").attr("href", "https://twitter.com/intent/tweet?text=" +
                          $("#quoteContainer").text());


    }

    //change style for Trumpify

    background = "background: linear-gradient(to top right, rgb(237, 142, 0), \
    rgb(238, 232, 170), rgb(212, 175, 55), rgb(238, 232, 170));"

    $("body").attr("style", background);

    quoteBoxStyle = "backgroundcolor: linear-gradient(to top right, \
                  rgba(237, 142, 0, 0.2), rgba(238, 232, 170, 0.2), \
                  rgba(212, 175, 55, 0.2), rgba(238, 232, 170, 0.2)); \
                  border-left: 5px solid rgba(0, 0, 0, 0.2); \
                  border-bottom: 5px solid rgba(0, 0, 0, 0.2); \
                  border-top: 5px solid rgba(255, 255, 255, 0.2); \
                  border-right: 5px solid rgba(255, 255, 255, 0.2); \
                  box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.2);"

    quoteTextStyle = "color: rgb(238, 232, 170); \
                      text-shadow: -2px  0 rgb(153, 101, 21); \
                      font-family: 'Arvo', serif;"

    $("#container").attr("style", quoteBoxStyle);
    $("#quoteContainer").attr("style", quoteTextStyle);
    $("h1").attr("style", quoteTextStyle);
    $("button").attr("style", quoteTextStyle);
    $("#tweetBtn").attr("style", quoteTextStyle);

    portLinkStyle = "color: rgb(212, 175, 55); font-family: 'Arvo', serif;"

    $(".portfolioLink").attr("style", portLinkStyle);
    $(".heroLogo").attr("style", "-webkit-text-stroke: 2px rgba(212, 175, 55, 0.5);")

    $(".buttons").attr("style", "background: linear-gradient(to right, rgba(0, 0, 0, 0.2), \
                        rgba(255,255,255,0.2));")

    textStyle = "background-color: rgb(218, 165, 32); color: transparent; \
                     text-shadow: 0px 2px 3px rgb(255,255,255,0.5); \
                     -webkit-background-clip: text; -moz-background-clip: text; \
                     background-clip: text;"

    $("#backgroundQuote p").attr("style", textStyle);
  });
});
