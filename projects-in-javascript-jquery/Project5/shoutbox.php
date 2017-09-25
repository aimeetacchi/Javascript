<?php include 'database.php'; ?>

<?php
// Do the JQuery ajax first, then will be sent to this file to check.
if(isset($_POST["name"]) && isset($_POST["shout"])) {
	$name = mysqli_real_escape_string($con, $_POST["name"]);
	$shout = mysqli_real_escape_string($con, $_POST["shout"]);
	$date = mysqli_real_escape_string($con, $_POST["date"]);

	// Set TimeZone
	date_default_timezone_set('Europe/London');

	$date = date('h:i:s a',time());


	//QUERY TO DATABASE
	$query = "INSERT INTO shouts (name, shout, date)
	VAULES ('$name', '$shout', '$date')";

	// Check for errors

	if(!mysqli_query($con, $query)) {
		echo 'Error: '.mysqli_error($con);
	} else {
		echo '<li>'.$name.': '.$shout.' ['.$date.']</li>';
	}
}

?>

