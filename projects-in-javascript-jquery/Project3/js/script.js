// search bar handler
$(function(){
	var searchField = $('#query');
	var icon = $('#search-btn');

	// Focus Event Handler
	$(searchField).on('focus', function(){
		$(this).animate({
			width: '100%'
		}, 400 /* speed */ );
		$(icon).animate({
			right: '10px'
		}, 400);
	});

	//Blur Event Handler
	$(searchField).on('blur', function(){
		if(searchField.val() == ''){
			
			$(searchField).animate({
				width: '45%'
			}, 400);
			
			$(icon).animate({
				right: '360px'
			}, 400, function(){});

		}
	});

	$('#search-form').submit(function(e){
		e.preventDefault();
	})
})

// Function to search

function search() {
	// Clear Results
	$('#results').html('');
	$('#buttons').html('');

	// Get Form Input
	q = $('#query').val();

	//Run get Request on API
	// get the part, q (query), type, and api key.
	$.get(
		"https://www.googleapis.com/youtube/v3/search", {
		part: 'snippet, id',
		q: q,
		type: 'video',
		key: 'AIzaSyBbW9FgiVQl_Ssqz6SLvl-reidgK-hSBfI'},
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;

			// Log Data
			console.log(data);

			$.each(data.items, function(i, item){
				// Get Output
				var output = getOutput(item);

				// Display Results
				$('#results').append(output);
			});
		}
		);
}

// Build OutPut Function
function getOutput(item){
	var videoId = item.id.videoId;
	var title = item.snippet.title;
	var description = item.snippet.description;
	var thumb = item.snippet.thumbnails.high.url;
	var channelTitle = item.snippet.channelTitle;
	var videoDate = item.snippet.publishedAt;


	// Build output string

	var output = '<li>' +
		'<div class="list-left">' +
		'<img src="'+thumb+'">' +
		'</div>' +
		'<div class="list-right">' +
		'<h3>'+title+'</h3>' +
		'<small>By <span class="cTitle">'+channelTitle+'</span> on '+videoDate+'</small>' +
		'<p>'+description+'</p>' +
		'</div>' +
		'</li>' +
		'<div class="clearfix"></div>' +
		'';

		return output;
	;

}