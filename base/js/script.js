$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // $(".red-box").fadeOut(2000);
  // $(".red-box").fadeIn(3000);
  //Very cool, fade to lets you set a duration and then set the opacity. 
  // $(".red-box").fadeTo(2000, 0.2);
  // $(".green-box").fadeTo(4000, 0.5);
  // $(".blue-box").fadeTo(6000, 0.8);
  //fadeTo is useful when you want something to disapper and not change the layout. Display sets it to whatever it was before where the fadetoggle will remove the display property. 
  // $(".green-box").fadeTo(1000, 0);
  // $(".green-box").fadeToggle();

//2000miliseconds is 2seconds

$(".blue-box").show();

// console.log($(".blue-box"));

// $(".blue-box").slideUp(800);
// $(".blue-box").slideDown(600);

$("p").hide();
$("p").slideDown(1000);


});


