/************* <!--Nav-- >  *************/

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
/************* <!--Nav End-- >  *************/



/************* <!--Testimonial Slides-- >  *************/

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "/img/Testimonial1.png";
images[1] = "/img/Testimonial2.png";
images[2] = "/img/Testimonial3.png";


// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;

/************* <!--Testimonial Slides End-- >  *************/
