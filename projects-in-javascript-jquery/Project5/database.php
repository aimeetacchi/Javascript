<?php
// Connect to mySQL
$db_name = 'jsshoutbox';

$con = mysql_connect("localhost", "root", " ", $db_name);

if(mysqli_connect_errno()){
	echo 'Failed to connect: '.mysqli_connect_errno();
}

?>