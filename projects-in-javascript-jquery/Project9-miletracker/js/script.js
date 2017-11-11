$(document).one('pageinit', function(){
	//Display runs;
	showRuns();

	// Add Handler
	$('#submitAdd').on('tap', addRun);

	// Edit Handler
	$('#submitEdit').on('tap', editRun);

	// Delete Handler
	$('#stats').on('tap','#deleteLink', deleteRun);

	// Set Current Handler
	$('#stats').on('tap','#editLink', setCurrent);

	// Clear Handler
	$('#clearRuns').on('tap', clearRuns);



	// Show Stats - show all runs on homepage.
	function showRuns(){
		// gets runs object/string
		var runs = getRunsObject();

		// Check if empty
		if (runs != '' && runs != null) {
			for(var i = 0;i < runs.length;i++){
				$('#stats').append('<li class="ui-body-inherit ui-li-static">'+
					'<strong>Date:</strong>'+
					runs[i]["date"]+
					'<br/><strong>Distance:</strong>'+
					runs[i]["miles"]+'m'+
					'<div class="controls">'+
					'<a href="#edit" id="editLink" data-miles="'+runs[i]["miles"]+'" data-date="'+runs[i]["date"]+'">Edit</a> | '+
					'<a href="#delete" id="deleteLink" data-miles="'+runs[i]["miles"]+'" data-date="'+runs[i]["date"]+'" onclick="return confirm(\'Are you sure?\')">Delete</a>'+
					'</li>');
			}
			$('#home').bind('pageinit', function(){
				$('#stats').listview('refresh');
			})
		} else {
			$('#stats').html('<p>You have no logged runs</p>');
		}
	}

	// ===== ADD a Run Function
	function addRun(){
		//Get Form Values
		var miles = $('#addMiles').val();
		var date = $('#addDate').val();

		// Create the run object
		var run = {
			date: date,
			miles: parseFloat(miles),
		};

		var runs = getRunsObject();

		// Add runs to runs Array
		runs.push(run);

		alert('Run Added');

		// Set stringified object to localStorage
		localStorage.setItem('runs', JSON.stringify(runs));

		// Redirect
		window.location.href="index.html";

		return false;

	};

	// ======  Edit Run Function
	function editRun(){
		// Get current data
		currentMiles = localStorage.getItem('currentMiles');
		currentDate = localStorage.getItem('currentDate');
		
		var runs = getRunsObject();

		//Loop through current runs
		for(var i = 0; i < runs.length; i++){
			// if the loop matches the current values delete it.
			if(runs[i].miles == currentMiles && runs[i].date == currentDate) {
				runs.splice(i, 1);
			}
			// Then add the run back in
			localStorage.setItem('runs', JSON.stringify(runs));
		};

		//Get Form Values
		var miles = $('#editMiles').val();
		var date = $('#editDate').val();

		// Create the run object
		var update_run = {
			date: date,
			miles: parseFloat(miles),
		};

		// Add runs to runs Array
		runs.push(update_run);

		alert('Run Updated');

		// Set stringified object to localStorage
		localStorage.setItem('runs', JSON.stringify(runs));

		// Redirect
		window.location.href="index.html";

		return false;
	};

	function clearRuns(){
		localStorage.removeItem('runs');
		$('#stats').html('<p>You have no logged runs</p>');
	}

	// ======  Delete Run Function
	function deleteRun(){
		// Set ls items
		localStorage.setItem('currentMiles', $(this).data('miles'));
		localStorage.setItem('currentDate', $(this).data('date'));

		// Get current data
		currentMiles = localStorage.getItem('currentMiles');
		currentDate = localStorage.getItem('currentDate');
		
		var runs = getRunsObject();

		//Loop through current runs
		for(var i = 0; i < runs.length; i++){
			// if the loop matches the current values delete it.
			if(runs[i].miles == currentMiles && runs[i].date == currentDate) {
				runs.splice(i, 1);
			}
			// Then add the run back in
			localStorage.setItem('runs', JSON.stringify(runs));
		};

		alert('Run Deleted');

		// Redirect
		window.location.href="index.html";

		return false;
	}


	// =====  Get the runs Object
	function getRunsObject(){
		// Set runs array
		var runs = new Array();
		// Get current runs from localStorage
		var currentRuns = localStorage.getItem('runs');

		// Check localStorage
		if(currentRuns != null) {
			// Set the runs
			var runs = JSON.parse(currentRuns);
		}

		// Return runs Object
		return runs.sort(function(a,b){ return new Date(b.date) - new Date(a.date) });
	}

	// Set the current clicked miles and date
	function setCurrent(){
		// Set ls items
		localStorage.setItem('currentMiles', $(this).data('miles'));
		localStorage.setItem('currentDate', $(this).data('date'));

		// Inset form fields
		$('#editMiles').val(localStorage.getItem('currentMiles'));
		$('#editDate').val(localStorage.getItem('currentDate'));
	};

});