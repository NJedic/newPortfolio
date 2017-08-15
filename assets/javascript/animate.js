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




// ++++++WEBSITE FUNCTIONALITY+++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Animation
// On Document Ready...
$(document).ready(function(){
	// Add class to fadeIn Profile Picture,
	$("#profilePicture").addClass("animated fadeIn delay0s9ms");
	// Call function to render Name,
	showText("#name", "Nikki Jedic", 0, 300);
	// Add class to fadeIn Description
	$("#description").addClass("animated fadeIn delay2s9ms");
});





	
 
