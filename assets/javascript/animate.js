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

// index.html
// +++++++++++++++++++++
// On Document Ready...
$(document).ready(function(){
	// Add class to fadeIn hr
	$("#jumbotronHr").addClass("animated fadeInLeft delay0s9ms");
	// Add class to fadeIn Name
	$("#name").addClass("animated fadeIn delay1s9ms");
});

// bio.html
// +++++++++++++++++++++
// On Document Ready...
$(document).ready(function(){
	// Add class to fadeIn About Header pic
	// $("#aboutHeader").addClass("animated fadeIn delay0s9ms");
	// Call function to render Name,
	showText("#bioName", "Nikki", 0, 300);
});

	
 
