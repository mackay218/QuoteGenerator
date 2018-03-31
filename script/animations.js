$(document).ready(function(){


});

var quoteTl = new TimelineLite({paused: true});

quoteTl.add(TweenLite.to("#container", 0.5, {left: "100vw"}));
quoteTl.add(TweenLite.to("#container", 0.1, {opacity: 0}));
quoteTl.add(TweenLite.to("#container", 0.1, {left: "-100vw"}));
quoteTl.add(TweenLite.to("#container", 0.1, {opacity: 1}));
quoteTl.add(TweenLite.to("#container", 0.5, {left: 0}));

quoteTl.add(TweenLite.to("#signature", 0.5, {css:{"transform": "rotateX(180deg)"}}), "-=1.3");
quoteTl.add(TweenLite.to("#signature", 0.5, {css:{"transform": "rotateX(360deg)"}}),"-=0.8");



$("#getQuote").click( function(){
  quoteTl.restart();
});



  $("#trumpify").click( function(){
    quoteTl.restart();
  });
