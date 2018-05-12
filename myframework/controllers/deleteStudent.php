<?php

$servername = "localhost";
$username = "root";  //your user name for php my admin if in local most probaly it will be "root"
$password = "root";  //password probably it will be empty
$databasename = "grades"; //Your db name
// Create connection
$conn = new mysqli($servername, $username, $password,$databasename);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// echo "Connected successfully";

$id= $_GET["id"];
$sql = "DELETE FROM grades WHERE studentid="."$id.";
$result = $conn->query($sql);
$conn->close();
header("Location: http://127.0.0.1");