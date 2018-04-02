//function to get random quotes from forismatic API
$(document).ready(function(){

  //variables for style changes
  var color1 = "black";
  var color2 = "white";
  var textStyle = "";
  var backgroundTextStyle = "";
  var quoteBoxStyle = "";
  var quoteTextStyle = "";
  var portLinkStyle = "";

  var quoteOrTrumpTest = 0;
  var quoteLength = "";
  var q = "";
  var a = "";
  var qWords = "";

  var clickCounter = 1;

  var trumpifyCounter = 0;


  $("#getQuote").on("click",function(){
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=en",
    function (quote){
      //correct title
      $("h1").html("Quotes of Wisdom");
      //append quote
      $(".quote").html("&quot" + quote.quoteText + "&quot");
      //append author
      //landscape view
      if(window.innerWidth > window.innerHeight){
        $("#author").attr("style", "font-weight: normal; font-style: italic; \
                          font-size: 4vw;");
      }
      //portrait view
      else if(window.innerHeight > window.innerWidth){
        $("#author").attr("style", "font-weight: normal; font-style: italic; \
                          font-size: 3vh;");
      }

      if(quote.quoteAuthor){
        $(".author").html("-" + quote.quoteAuthor);
      }
      //if no author credit to unknown
      else{
        $("#author").html("-unknown");
      }

    $("#tweetBtn").attr("href", "https://twitter.com/intent/tweet?text=" +
                        $("#quoteContainer").text());


    quoteLength = (quote.quoteText).length;

    /* font size change for orientation and quote size*/
    //landscape view
    if(window.innerWidth > window.innerHeight){
      $("#quoteContainer").attr("style", "font-size: 3vw");
    }

    //portrait view
    else if(window.innerHeight > window.innerWidth){
      if(quoteLength > 300){
        $("#quoteContainer").attr("style", "font-size: 2vh;");
      }

      else if(quoteLength > 200){
        $("#quoteContainer").attr("style", "font-size: 2.5vh;");
      }

      else if(quoteLength > 100){
        $("#quoteContainer").attr("style", "font-size: 3vh");
      }
      else {
        $("#quoteContainer").attr("style", "font-size: 4vh");
      }


    }
    /*************************************************/

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
                      + color1 + ", " + color2 + "); opacity: 1; transition: 3s"

    // smooth transition of colors
    clickCounter += 1;

    if(clickCounter % 2 == 0){
      $("#backgroundQuote1").attr("style", background);
      $("#backgroundQuote2").attr("style", "opacity: 0; transition: 3s");
    }
    else{
      $("#backgroundQuote1").attr("style", "opacity: 0; transition: 3s");
      $("#backgroundQuote2").attr("style", background);
    }

    $(".trumpBackGround").attr("style", "opacity: 0; transition: 3s");

    //change quote box style

    quoteBoxStyle = "background: rgba(0, 0, 0, 0.2); \
                      border: solid 5px rgba(255,255,255,0.5); \
                      box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);"

    quoteTextStyle = "color: white; text-shadow: -1px 0 rgba(255,255,255,0.5); \
                      font-family: 'PT Sans', sans-serif; transition: 0.5s"

    textStyle = "color: white; text-shadow: -1px 0 rgba(255,255,255,0.5); \
                 font-family: 'PT Sans', sans-serif transition: 0.5s;"

    var buttonStyle = "color: white; font-family: 'PT Sans', sans-serif; \
                       transition: 0.5s;"




    $(".container").attr("style", quoteBoxStyle)



    $("#quoteContainer").attr("style", quoteTextStyle);
    $("h1").attr("style", textStyle);
    $(".buttons").attr("style", "background: rgba(255,255,255,0.5);")
    $(".btn").attr("style", "color: white;");
    $("#tweetBtn").attr("style", buttonStyle);
    $(".portfolioLink").attr("style", "color: white; transition: 1s")

    portLinkStyle = "color: white; -webkit-text-stroke: 2px rgba(255,255,255,0.2); \
                    transition: 1s;"
    $(".heroLogo").attr("style", portLinkStyle);


    quoteOrTrumpTest = 0;
    trumpifyCounter = 0;


  });

  $("#trumpify").on("click", function(){
    //get current quote and author
    q = $("#quote").text();
    a = $("#author").text().replace("-", "");
    //remove quotes""
    qWords = q.replace('"', "'").replace('"', "'");
    //turn into array
    qWords = qWords.split(" ");

    trumpifyCounter += 1;


    if(qWords != "" && qWords[0] && trumpifyCounter <= 1){
      var trumpWords = ["Bigly", "is Yuge", "...Believe Me...", "honestly",
                        "stupid", "smart", "Loser", "Moron", "we", "they",
                        "great","Fire and Fury", "incredible", "on both sides",
                        "men and women", "Covfefe", "Fake News", "folks",
                        "tremendous", "have a lot of money", "classy",
                        "millions and billions", "you'll find out", "winning",
                        "No Collusion","is weak", "is strong", "zero",
                        "amazing", "is rich", "Ivanka", "Putin", "Russia", "Sad!"]
      //number of words to change
      var max = qWords.length/2;
      var numOfChanges = Math.floor((Math.random() * (max - 1)) + 1);
      for(var i = 0; i < numOfChanges; i++){

        quoteLength = qWords.length;

        //choose which word in quote to change
        var numOfWordToChange = Math.floor(Math.random() * quoteLength);

        //choose random word from trumpWords
        var numOfTrumpWord = Math.floor(Math.random() * trumpWords.length) ;

        //change word
        qWords[numOfWordToChange] = trumpWords[numOfTrumpWord];
      }

      //add trump words
      if(a == "unknown"){
        qWords.unshift("You know...");
      }
      else{
        var trumpOpen = [[" You know " + a + "? " + a + " is doing great work these days, like"],
                         [" I Believe " + a + " said...well someone told me..."],
                         [ a + " is the best. The best! and you know what " + a + " said? " + a + " said "]]

        var openNum = Math.floor(Math.random() * 3);

        var quoteOpen = trumpOpen[openNum];

        qWords.unshift(quoteOpen);

      }

      var trumpClose = [["..believe me folks."],
                        [" You heard it here first folks."],
                        [" Sad!"],
                        [" NO COLLUSION!"]]

      var closeNum = Math.floor(Math.random() * 4);

      var quoteClose = trumpClose[closeNum];

      qWords.push(quoteClose);
      qWords = qWords.join(" ");
      $("#quote").html(qWords);
      $("h1").html("Quotes of Winning?");
      $("#author").attr("style", "font-weight: bold; font-style: normal; \
                        font-size: 5vw;" );
      $("#author").html("-TRUMP");

      //update text for tweet
      $("#tweetBtn").attr("href", "https://twitter.com/intent/tweet?text=" +
                          $("#quoteContainer").text());


    }

    //change style for Trumpify
      if(trumpifyCounter <= 1){
        //landscape view
        if(window.innerWidth > window.innerHeight){
          if(qWords.length > 300){
            quoteTextStyle = "color: rgb(238, 232, 170); \
                              text-shadow: -2px  0 rgb(153, 101, 21); \
                              font-family: 'Arvo', serif; \
                              font-size: 2vw;"
          }
          else if(qWords.length > 200){
            quoteTextStyle = "color: rgb(238, 232, 170); \
                              text-shadow: -2px  0 rgb(153, 101, 21); \
                              font-family: 'Arvo', serif; \
                              font-size: 2.5vw;"
          }


          else{
            quoteTextStyle = "color: rgb(238, 232, 170); \
                              text-shadow: -2px  0 rgb(153, 101, 21); \
                              font-family: 'Arvo', serif; \
                              font-size: 3vw;"
          }
        }

        //portait view
        else if(window.innerHeight > window.innerWidth){

          if(qWords.length > 300){
            quoteTextStyle = "color: rgb(238, 232, 170); \
                              text-shadow: -2px  0 rgb(153, 101, 21); \
                              font-family: 'Arvo', serif; \
                              font-size: 2.5vh;"
          }

          else if(qWords.length > 200){
            quoteTextStyle = "color: rgb(238, 232, 170); \
                              text-shadow: -2px  0 rgb(153, 101, 21); \
                              font-family: 'Arvo', serif; \
                              font-size: 3vh;"
          }


          else if(qWords.length > 100){
            quoteTextStyle = "color: rgb(238, 232, 170); \
                              text-shadow: -2px  0 rgb(153, 101, 21); \
                              font-family: 'Arvo', serif; \
                              font-size: 3vh;"
          }

          else{
            quoteTextStyle = "color: rgb(238, 232, 170); \
                              text-shadow: -2px  0 rgb(153, 101, 21); \
                              font-family: 'Arvo', serif; \
                              font-size: 4vh;"
          }

        }
      }


    $(".backgroundQuote").attr("style", "opacity: 0; transition: 3s");
    $(".trumpBackGround").attr("style", "opacity: 1; transition: 3s");

    quoteBoxStyle = "backgroundcolor: linear-gradient(to top right, \
                  rgba(237, 142, 0, 0.2), rgba(238, 232, 170, 0.2), \
                  rgba(212, 175, 55, 0.2), rgba(238, 232, 170, 0.2)); \
                  border-left: 5px solid rgba(0, 0, 0, 0.2); \
                  border-bottom: 5px solid rgba(0, 0, 0, 0.2); \
                  border-top: 5px solid rgba(255, 255, 255, 0.2); \
                  border-right: 5px solid rgba(255, 255, 255, 0.2); \
                  box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.2); \
                  "



    textStyle = "color: rgb(238, 232, 170); \
                      text-shadow: -2px  0 rgb(153, 101, 21); \
                      font-family: 'Arvo', serif; transition: 0.5s"

    $(".container").attr("style", quoteBoxStyle);
    $("#quoteContainer").attr("style", quoteTextStyle,);
    $("h1").attr("style", textStyle);
    $("button").attr("style", textStyle);
    $("#tweetBtn").attr("style", textStyle);

    portLinkStyle = "color: rgb(212, 175, 55); font-family: 'Arvo', serif; \
                    transition: 1s;"

    $(".portfolioLink").attr("style", portLinkStyle);
    $(".heroLogo").attr("style", "-webkit-text-stroke: 2px rgba(212, 175, 55, 0.5); \
                        transition: 1s;")

    $(".buttons").attr("style", "background: linear-gradient(to right, rgba(0, 0, 0, 0.2), \
                        rgba(255,255,255,0.2));")



    quoteOrTrumpTest = 1;

  });

  //change font size on orientation change
  $(window).on("orientationchange", function(event){

    setTimeout(function(){
      //regular quote
      if(quoteOrTrumpTest == 0){
        //landscape
        if(window.innerWidth > window.innerHeight){
          $("#author").attr("style", "font-weight: normal; font-style: italic; \
                            font-size: 4vw;");

          $("#quoteContainer").attr("style", "font-size: 3vw");
        }
        //portrait
        else if(window.innerHeight > window.innerWidth){
          $("#author").attr("style", "font-weight: normal; font-style: italic; \
                            font-size: 3vh;");

          if(quoteLength > 300){
            $("#quoteContainer").attr("style", "font-size: 2vh;");
          }

          else if(quoteLength > 200){
            $("#quoteContainer").attr("style", "font-size: 2.5vh;");
          }

          else if(quoteLength > 100){
            $("#quoteContainer").attr("style", "font-size: 3vh");
          }
          else{
            $("#quoteContainer").attr("style", "font-size: 4vh");
          }
        }
      }

      //trumpified quote
      else if(quoteOrTrumpTest == 1){
        //landscape
        if(window.innerWidth > window.innerHeight){
          $("#author").attr("style", "font-weight: bold; font-style: normal; \
                            font-size: 5vw;" );

          if(qWords.length > 300){
            quoteTextStyle = "color: rgb(238, 232, 170); \
                              text-shadow: -2px  0 rgb(153, 101, 21); \
                              font-family: 'Arvo', serif; \
                              font-size: 2vw;"

            $("#quoteContainer").attr("style", quoteTextStyle);
          }

          else if(qWords.length > 200){
            quoteTextStyle = "color: rgb(238, 232, 170); \
                              text-shadow: -2px  0 rgb(153, 101, 21); \
                              font-family: 'Arvo', serif; \
                              font-size: 2.5vw;"

            $("#quoteContainer").attr("style", quoteTextStyle);
          }

          else{
            quoteTextStyle = "color: rgb(238, 232, 170); \
                              text-shadow: -2px  0 rgb(153, 101, 21); \
                              font-family: 'Arvo', serif; \
                              font-size: 3vw;"

            $("#quoteContainer").attr("style", quoteTextStyle);
          }

        }
        //portrait
        else if(window.innerHeight > window.innerWidth){
          $("#author").attr("style", "font-weight: bold; font-style: normal; \
                            font-size: 4vh;" );

          if(qWords.length > 300){
            quoteTextStyle = "color: rgb(238, 232, 170); \
                              text-shadow: -2px  0 rgb(153, 101, 21); \
                              font-family: 'Arvo', serif; \
                              font-size: 2vh;"

            $("#quoteContainer").attr("style", quoteTextStyle);
          }

          else if(qWords.length > 200){
            quoteTextStyle = "color: rgb(238, 232, 170); \
                              text-shadow: -2px  0 rgb(153, 101, 21); \
                              font-family: 'Arvo', serif; \
                              font-size: 2.5vh;"

            $("#quoteContainer").attr("style", quoteTextStyle);
          }

          else if(qWords.length > 100){
            quoteTextStyle = "color: rgb(238, 232, 170); \
                              text-shadow: -2px  0 rgb(153, 101, 21); \
                              font-family: 'Arvo', serif; \
                              font-size: 3vh;"

            $("#quoteContainer").attr("style", quoteTextStyle);
          }
          else{
            quoteTextStyle = "color: rgb(238, 232, 170); \
                              text-shadow: -2px  0 rgb(153, 101, 21); \
                              font-family: 'Arvo', serif; \
                              font-size: 4vh;"

            $("#quoteContainer").attr("style", quoteTextStyle);
          }
        }
      }

    },50);


  });

  //change font size on window resize
  $(window).resize(function(){
    //regular quote
    if(quoteOrTrumpTest == 0){
      //landscape
      if(window.innerWidth > window.innerHeight){
        $("#author").attr("style", "font-weight: normal; font-style: italic; \
                          font-size: 4vw;");

        $("#quoteContainer").attr("style", "font-size: 3vw");
      }
      //portrait
      else if(window.innerHeight > window.innerWidth){
        $("#author").attr("style", "font-weight: normal; font-style: italic; \
                          font-size: 3vh;");

        if(quoteLength > 300){
          $("#quoteContainer").attr("style", "font-size: 2vh;");
        }

        else if(quoteLength > 200){
          $("#quoteContainer").attr("style", "font-size: 2.5vh;");
        }

        else if(quoteLength > 100){
          $("#quoteContainer").attr("style", "font-size: 3vh");
        }
        else{
          $("#quoteContainer").attr("style", "font-size: 4vh");
        }
      }
    }

    //trumpified quote
    else if(quoteOrTrumpTest >= 1){
      //landscape
      if(window.innerWidth > window.innerHeight){
        $("#author").attr("style", "font-weight: bold; font-style: normal; \
                          font-size: 5vw;" );

        if(qWords.length > 300){
          quoteTextStyle = "color: rgb(238, 232, 170); \
                            text-shadow: -2px  0 rgb(153, 101, 21); \
                            font-family: 'Arvo', serif; \
                            font-size: 2vw;"

          $("#quoteContainer").attr("style", quoteTextStyle);
        }

        else if(qWords.length > 200){
          quoteTextStyle = "color: rgb(238, 232, 170); \
                            text-shadow: -2px  0 rgb(153, 101, 21); \
                            font-family: 'Arvo', serif; \
                            font-size: 2.5vw;"

          $("#quoteContainer").attr("style", quoteTextStyle);
        }

        else{
          quoteTextStyle = "color: rgb(238, 232, 170); \
                            text-shadow: -2px  0 rgb(153, 101, 21); \
                            font-family: 'Arvo', serif; \
                            font-size: 3vw;"

          $("#quoteContainer").attr("style", quoteTextStyle);
        }

      }
      //portrait
      else if(window.innerHeight > window.innerWidth){
        $("#author").attr("style", "font-weight: bold; font-style: normal; \
                          font-size: 4vh;" );

        if(qWords.length > 300){
          quoteTextStyle = "color: rgb(238, 232, 170); \
                            text-shadow: -2px  0 rgb(153, 101, 21); \
                            font-family: 'Arvo', serif; \
                            font-size: 2vh;"

          $("#quoteContainer").attr("style", quoteTextStyle);
        }

        else if(qWords.length > 200){
          quoteTextStyle = "color: rgb(238, 232, 170); \
                            text-shadow: -2px  0 rgb(153, 101, 21); \
                            font-family: 'Arvo', serif; \
                            font-size: 2.5vh;"

          $("#quoteContainer").attr("style", quoteTextStyle);
        }

        else if(qWords.length > 100){
          quoteTextStyle = "color: rgb(238, 232, 170); \
                            text-shadow: -2px  0 rgb(153, 101, 21); \
                            font-family: 'Arvo', serif; \
                            font-size: 3vh;"

          $("#quoteContainer").attr("style", quoteTextStyle);
        }
        else{
          quoteTextStyle = "color: rgb(238, 232, 170); \
                            text-shadow: -2px  0 rgb(153, 101, 21); \
                            font-family: 'Arvo', serif; \
                            font-size: 4vh;"

          $("#quoteContainer").attr("style", quoteTextStyle);
        }
      }
    }

  });

});
