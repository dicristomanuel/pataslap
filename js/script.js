//Pataslap

var keyPressed,
		$pageContainer = $(".called");

$(document).keypress(function(evt) {
      $(".home").animate({
      	marginTop: "-700px"
      },200)
});

$(document).keypress(function(evt) {
      keyPressed = evt.which;
      console.log(keyPressed);
      showMe(keyPressed);
});

var colors = ["#F75858", "#FA84E3", "#CB84FA", "#84A0FA", "#84FAFA", "#84FAA8", "#BBFA84", "#FAFA84"];
var index = 0;

function showMe(key) {
	var rand = Math.floor(Math.random()*100)+1;
	var keyGiven = "_" + key;
	var thisAnimation = $("<div class='" + keyGiven + "'></div>")
		if(keyGiven === "_98") {
			var top = rand + "%";
			var left = rand + "%";
			thisAnimation.css({
				top: top,
				left: left
			})//cssAnimation
		} else if(keyGiven === "_32") {
			if(!colors[index]) {
					index = 0;
				}
				$("body").css({
					backgroundColor: colors[index]
				})//cssAnimation
			index+=1;			
		}//ifStatement



	
	$("body").append(thisAnimation);
		
		setTimeout(function() {
					thisAnimation.remove();
				}, 1500);
}//showMe