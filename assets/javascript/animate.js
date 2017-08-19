// ++++++FUNCTIONS+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Function to render Name
function showText(target, message, index, interval) {
	var deferred = $.Deferred();

  if (index < message.length) { 
    $(target).append(message[index++]); 
    setTimeout(function(){ 
    	showText(target, message, index, interval);
    	deferred.resolve(); 
    }, interval); 
  } 
  return deferred.promise();
}
// Call function to render Name,
	// showText("#name", "Nikki Jedic", 0, 300);



// ++++++WEBSITE FUNCTIONALITY+++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Animation
// On Document Ready...
$(document).ready(function(){
	
	// Add class to fadeIn Description
	// $("#description").addClass("animated fadeIn delay1s6ms");
	$("#jumbotronHr").addClass("animated fadeInLeft delay0s9ms");
	$("#name").addClass("animated fadeIn delay1s9ms");
});




	
 
