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
	
	var leftLast = false;

function showMe(key) {
	var keyGiven = "_" + key;
	var thisAnimation = $("<div class='" + keyGiven + "'></div>");

	console.log(keyGiven);
		
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
					if(!leftLast) {
						thisAnimation.css({
							left: "68%"
						})//cssAnimation
							leftLast = true;
					} else {
							thisAnimation.css({
							left: "0%"
					})//cssAnimation
					 leftLast = false;
						}
				$("body").append(thisAnimation);
			
			} else if (keyGiven === "_104") {
				  thisAnimation = $('<object><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 726.2 202.9" style="enable-background:new 0 0 726.2 202.9;" xml:space="preserve" class="st0"><rect x="28" y="31.3" width="668.6" height="0.1"/><rect x="28" y="77.3" width="668.6" height="0.1"/><rect x="28" y="123.3" width="668.6" height="0.1"/><rect x="28" y="169.3" width="668.6" height="0.1"/></svg></object>');
						$("body").append(thisAnimation);
				} else {
						$("body").append(thisAnimation);
				}//ifStatement
		setTimeout(function() {
					thisAnimation.remove();
				}, 2100);
}//showMe







