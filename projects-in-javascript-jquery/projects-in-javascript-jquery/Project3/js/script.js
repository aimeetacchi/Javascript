// ================================
	// ==== Search bar handler
// ================================

$(function(){
	var searchField = $('#query');
	var icon = $('#search-btn');

	// ==== Focus Event Handler
	$(searchField).on('focus', function(){
		$(this).animate({
			width: '100%'
		}, 400 /* speed */ );
		$(icon).animate({
			right: '10px'
		}, 400);
	});

	// === Blur Event Handler
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


// =================================
	// ======= Function to search
//===================================

function search() {
	// ==== Clear Results
	$('#results').html('');
	$('#buttons').html('');

	// === Get Form Input
	q = $('#query').val();

	// === Run get Request on API
	// === get the part, q (query), type, and api key.
	$.get(
		"https://www.googleapis.com/youtube/v3/search", {
		part: 'snippet, id',
		q: q,
		type: 'video',
		key: 'AIzaSyBbW9FgiVQl_Ssqz6SLvl-reidgK-hSBfI'},
			function(data){
				var nextPageToken = data.nextPageToken;
				var prevPageToken = data.prevPageToken;

				// === Log Data
				console.log(data);

				$.each(data.items, function(i, item){
					// === Get Output
					var output = getOutput(item);

					// === Display Results
					$('#results').append(output);
				});

				//=== 2 calling the getButtons function, returned into the buttons var.
				var buttons = getButtons(prevPageToken, nextPageToken);

				// === 3 Display the buttons
				$('#buttons').append(buttons);
			}
		);
}
// ==========================================
	// ---- Next Page Function 
// ==========================================

function nextPage(){
	var token = $('#next-button').data('token');
	var q = $('#next-button').data('query');
	// ==== Clear Results
	$('#results').html('');
	$('#buttons').html('');

	// === Get Form Input
	q = $('#query').val();

	// === Run get Request on API
	// === get the part, q (query), type, and api key.
	$.get(
		"https://www.googleapis.com/youtube/v3/search", {
		part: 'snippet, id',
		q: q,
		pageToken: token,
		type: 'video',
		key: 'AIzaSyBbW9FgiVQl_Ssqz6SLvl-reidgK-hSBfI'},
			function(data){
				var nextPageToken = data.nextPageToken;
				var prevPageToken = data.prevPageToken;

				// === Log Data
				console.log(data);

				$.each(data.items, function(i, item){
					// === Get Output
					var output = getOutput(item);

					// === Display Results
					$('#results').append(output);
				});

				//=== 2 calling the getButtons function, returned into the buttons var.
				var buttons = getButtons(prevPageToken, nextPageToken);

				// === 3 Display the buttons
				$('#buttons').append(buttons);
			}
		);
}

// ==========================================
	// ---- Prev Page Function 
// ==========================================

function prevPage(){
	var token = $('#prev-button').data('token');
	var q = $('#prev-button').data('query');
	// ==== Clear Results
	$('#results').html('');
	$('#buttons').html('');

	// === Get Form Input
	q = $('#query').val();

	// === Run get Request on API
	// === get the part, q (query), type, and api key.
	$.get(
		"https://www.googleapis.com/youtube/v3/search", {
		part: 'snippet, id',
		q: q,
		pageToken: token,
		type: 'video',
		key: 'AIzaSyBbW9FgiVQl_Ssqz6SLvl-reidgK-hSBfI'},
			function(data){
				var nextPageToken = data.nextPageToken;
				var prevPageToken = data.prevPageToken;

				// === Log Data
				console.log(data);

				$.each(data.items, function(i, item){
					// === Get Output
					var output = getOutput(item);

					// === Display Results
					$('#results').append(output);
				});

				//=== 2 calling the getButtons function, returned into the buttons var.
				var buttons = getButtons(prevPageToken, nextPageToken);

				// === 3 Display the buttons
				$('#buttons').append(buttons);
			}
		);
}

// ==========================================
	// ==== Build OutPut Function
// ==========================================
function getOutput(item){
	var videoId = item.id.videoId;
	var title = item.snippet.title;
	var description = item.snippet.description;
	var thumb = item.snippet.thumbnails.high.url;
	var channelTitle = item.snippet.channelTitle;
	var videoDate = item.snippet.publishedAt;


	// ==== Build output string

	var output = '<li>' +
		'<div class="list-left">' +
		'<a class="fancybox fancybox.iframe" href="http://www.youtube.com/embed/'+videoId+'"><img src="'+thumb+'"></a>' +
		'</div>' +
		'<div class="list-right">' +
		'<h3><a class="fancybox fancybox.iframe" href="http://www.youtube.com/embed/'+videoId+'">'+title+'</a></h3>' +
		'<small>By <span class="cTitle">'+channelTitle+'</span> on '+videoDate+'</small>' +
		'<p>'+description+'</p>' +
		'</div>' +
		'</li>' +
		'<div class="clearfix"></div>' +
		'';

		return output;

}

// ======================================================
	// 1 Build the buttons === this function will return it, up at the top where the function is called.
// ===================================================

function getButtons(prevPageToken, nextPageToken){
	if(!prevPageToken){
		var btnoutput = '<div class="button-container">'+
		'<button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="'+q+'"' +
		'onclick="nextPage();">Next Page</button></div>';
	} else {
		var btnoutput = '<div class="button-container">'+
		'<button id="prev-button" class="paging-button" data-token="'+prevPageToken+'" data-query="'+q+'"' +
		'onclick="prevPage();">Prev Page</button>' +
		'<button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="'+q+'"' +
		'onclick="nextPage();">Next Page</button></div>';
	}

	return btnoutput;
}