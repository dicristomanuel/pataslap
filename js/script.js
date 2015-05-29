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

function giveMeRandom() {
	var rand = Math.floor(Math.random()*100)+1;
	return rand;
};
	

function showMe(key) {
	var keyGiven = "_" + key;
	var thisAnimation = $("<div class='" + keyGiven + "'></div>")
		
	$("." + keyGiven)[0].cloneNode(true).play();
	$("." + keyGiven).trigger('play');

		if (keyGiven === "_32") {
			backgroundRandom();
		} else if (keyGiven === "_100") {
					thisAnimation.css({
						top: giveMeRandom() + "%",
						left: giveMeRandom() + "%"
					})//cssAnimation
				$("body").append(thisAnimation);
			} else if (keyGiven === "_102") {
					thisAnimation.css({
						left: giveMeRandom() + "%"
					})//cssAnimation
				$("body").append(thisAnimation);
			} else if (keyGiven === "_104") {
				}//ifStatement

	$("body").append(thisAnimation);
		
		setTimeout(function() {
					thisAnimation.remove();
				}, 1500);
}//showMe