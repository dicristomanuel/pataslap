//Pataslap

var keyPressed,
		$pageContainer = $(".called");

$(document).keypress(function(evt) {
      $(".home").animate({
      	marginTop: "-700px"
      },200)
       setTimeout(function() {
					$(".home").remove();
				}, 300);
});

$(document).keypress(function(evt) {
      keyPressed = evt.which;
      console.log(keyPressed);
      showMe(keyPressed);
});

var colors = ["#BCC7DC", "#C2BCDC", "#DCBCD7", "#DCBCBC", "#F6CD83", "#BEF683", "#83F6B9", "#83F6F4"];
var index = 0;

function backgroundRandom() {
	if(!colors[index]) {
					index = 0;
				} else {
				$("body").css({
					backgroundColor: colors[index]
				})//cssAnimation
			index+=1;			
		}//ifStatement
	}//backgroundRandom

function showMe(key) {
	var rand = Math.floor(Math.random()*100)+1;
	var keyGiven = "_" + key;
	var thisAnimation = $("<div class='" + keyGiven + "'></div>")
		if(keyGiven === "_98") {
				thisAnimation.css({
					top: rand + "%",
					left: rand + "%"
				})//cssAnimation
		} else if(keyGiven === "_32") {
			backgroundRandom();
		

		} else if (keyGiven === "_117") {
					thisAnimation.css({
						top: rand + "%",
						left: rand + "%"
					})//cssAnimation
				$("body").append(thisAnimation);
			}//ifStatement

	$("body").append(thisAnimation);
		
		setTimeout(function() {
					thisAnimation.remove();
				}, 1500);
}//showMe