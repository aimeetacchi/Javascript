$(document).ready(function(){
	$('nav a').on('click', function() {
		// Current Class assignment

		$(this).parent().addClass('current');
		$(this).parent().siblings().removeClass('current');

		// set heading text
		$('h1#heading').text($(this).text());

		// Get & Filter Link Text
		var category = $(this).text().toLowerCase().replace(' ','-');

		// Remove hidden class if 'all-projects' is selected
		if(category === 'all-projects'){
			// if all projects is selected this is going to select all the hidden ones, fade them in, then remove the hidden class.
			$('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
		} else {
			// loop through each of the li items.
			$('ul#gallery li').each( function(){
				// if the li doesnt have a category
				if(!$(this).hasClass(category)) {
					// hide and add class hidden
					$(this).hide().addClass('hidden');
				} else {
					// else li fadein, and remove the hidden class.
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		// stop Link behavior 
		return false;
	});

	// Mouse Enter overlay.
	$('ul#gallery li').on('mouseenter', function(){
		// Get data attribute values
		var title = $(this).children().data('title');
		var desc = $(this).children().data('desc');

		// Validation
		if(desc == null) {
			desc = 'Click to Enlarge';
		}

		if(title == null) {
			title = '';
		}

		//Create overlay div
		$(this).append('<div class="overlay"></div>');

		// get the overlay div
		var overlay = $(this).children('.overlay');

		// Add html to overlay
		overlay.html('<h3>'+title+'<p>'+desc+'</p>');

		// Fade in the overlay

		overlay.fadeIn(800);
	})

	// MouseLeave overlay
	$('ul#gallery li').on('mouseleave', function(){ 

		// get the overlay div
		var overlay = $(this).children('.overlay');

		// Fade out overlay

		overlay.fadeOut(500);
	})

})