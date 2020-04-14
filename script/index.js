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
    var qT = $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=en",
      function (quote){
        //if forismatic is working
        if(qT){

          //append quote
          $(".quote").html("&quot" + quote.quoteText + "&quot");

          if(quote.quoteAuthor){
          $(".author").html("-" + quote.quoteAuthor);
        }
          //if no author credit to unknown
          else{
          $("#author").html("-unknown");
        }
        }
        //else if forismatic is not working
        else{
          if(clickCounter == 2){
            //message explaining limit of quotes
            $(".quote").html("&quot The number of random quotes is currently \
                              limited do to connection issues &quot");
            $("#author").html("-Dan");
          }
          else{
            var quoteArray = [["To err is human, but to really foul things up \
                                you need a computer.", "Paul R. Ehrlich"],
                                ["A student of life considers the world a classroom.",
                                  "Harvey Mackay"],
                              ["The first rule of intelligent tinkering is to \
                                save all the parts.", "Paul Ehrlich"],
                              ["No one welcomes chaos, but why crave stability and \
                                predictability?", "Hugh Mackay"],
                              ["The saddest aspect of life right now is that science \
                                gathers knowledge faster than society gathers wisdom.",
                                "Isaac Asimov"],
                              ["The true delight is in the finding out rather than in \
                                the knowing", "Isaac Asimov"],
                              ["I propose to consider the question, Can machines think?",
                                "Alan Turing"],
                              ["It is not enough to have a good mind; the main thing is \
                                to use it well.", "René Descartes"],
                              ["Technology is cool, but you've go to use it as opposed \
                                to letting it use you.", "Prince"],
                              ["Dearly beloved, We are gathered here today to get \
                                through this thing called life.", "Prince"]];

            //choose quote at random
            var quoteArrayNum =  Math.floor(Math.random() * quoteArray.length);

            //append quote
            $(".quote").html("&quot" + quoteArray[quoteArrayNum][0] + "&quot");
            //append author
            $("#author").html("-" + quoteArray[quoteArrayNum][1]);

          }

      }
      //correct title
      $("h1").html("Quotes of Wisdom");

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

    });
    /*************************************************/



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

    var buttonStyle = "color: white; font-family: 'PT Sans', sans-serif; "




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
                        "amazing", "is rich", "Ivanka", "Jared", "Melanie", "Mike", 
                        "Mike Pence", "Pence", "Putin", "Russia", "Sad!", "nasty", 
                         "nasty woman", "that's a nasty question", "witch hunt!", "perfect call",
                        "moscow mitch", "the Ukraine", "China", "Xi", "no one saw it coming",
                      "no one saw this coming", "no one could have predicted this", "COVID19", 
                    "the virus", "the flu", "a little flu", "a strong vaccine", 
                    "hydroxychloroquine", "my uncle the scientist", "good genes", "good jeans",
                  "golf", "I'll never get to golf again", "golf carts", "(waves tiny hands)", "impeachment", 
                  "I'm impeached", "my authority is total", "My Generals", "Syria", "Assad", "Saudi Arabia",
        "Mohammad Bin Salman Al Saud", "Jamal Khashoggi", "Bezos", "Tim Apple", "Washington Post", "Fox News",
      "Fox & Friends", "OAN", "Fauci", "Anthony Fauci", "quarantine", "stay at home", "masks", "ventilators", 
      "federal stock pile", "failed tests", "NYC", "Florida", "9/11", "that woman in Michigan"]
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

    buttonStyle = "color: rgb(238, 232, 170); \
                  text-shadow: -2px  0 rgb(153, 101, 21);"

    $(".container").attr("style", quoteBoxStyle);
    $("#quoteContainer").attr("style", quoteTextStyle,);
    $("h1").attr("style", textStyle);
    $("button").attr("style", textStyle);
    $("#tweetBtn").attr("style", buttonStyle);

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
