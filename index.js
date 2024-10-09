// CLICKING THE IMAGES
// select every image representing one piece of the drum kit
var picArray = document.querySelectorAll(".pic");

// add event listeners to every image, which play sounds corresponding to the image
for (var i = 0; i < picArray.length; i++) {
	picArray[i].addEventListener("click", function() {
		
		// if the class name of the button is "kick pic", play the kick sound, etc.
		switch (this.className) {
			case "kick pic":
				var kick = new Audio("./sounds/sound1.mp3");
				kick.play();
			break;
			case "tom2 pic":
				var tomHigh = new Audio("./sounds/sound2.mp3");
				tomHigh.play();
			break;
			case "snare pic":
				var snare = new Audio("./sounds/sound3.mp3");
				snare.play();
			break;
			case "crash pic":
				var crash = new Audio("./sounds/sound4.mp3");
				crash.play();
			break;
			case "tom3 pic":
				var tomLow = new Audio("./sounds/sound5.mp3");
				tomLow.play();
			break;
			case "hi-hat pic":
				var hiHat = new Audio("./sounds/sound6.mp3");
				hiHat.play();
			break;
		}

	})

	// TAPPING THE KEYS
	// add a listener to the entire document (because there's no associated content on the page to click, just keys to press)
	document.addEventListener("keydown", function (event) {

		// if the 'a' key is pressed, play the kick sound, etc.
		switch (event.key) {
			case "a":
				var kick = new Audio("./sounds/sound1.mp3");
				kick.play();
			break;
			case "s":
				var tomHigh = new Audio("./sounds/sound2.mp3");
				tomHigh.play();
			break;
			case "d":
				var snare = new Audio("./sounds/sound3.mp3");
				snare.play();
			break;
			case "j":
				var crash = new Audio("./sounds/sound4.mp3");
				crash.play();
			break;
			case "k":
				var tomLow = new Audio("./sounds/sound5.mp3");
				tomLow.play();
			break;
			case "l":
				var hiHat = new Audio("./sounds/sound6.mp3");
				hiHat.play();
			break;
		}
		
	})
}

