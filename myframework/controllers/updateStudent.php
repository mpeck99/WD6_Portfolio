<?php
/**
 * Created by PhpStorm.
 * User: MorganPeck
 * Date: 5/11/18
 * Time: 1:20 PM
 */
$servername = "localhost";
$username = "root";  //your user name for php my admin if in local most probably it will be "root"
$password = "root";  //password probably it will be empty
$databasename = "grades"; //Your db name
// Create connection
$conn = new mysqli($servername, $username, $password, $databasename);
// Check connection
if ($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
}
$sql = 'SELECT * FROM grades';
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    echo '<table class=\'table\'>
            <tr>
               <th scope=\'col\'>Name</th>
               <th scope=\'col\'>Percentage</th>
               <th scope=\'col\'>Grade</th>
            </tr> ';
    while ($row = $result->fetch_assoc()) {
        $id = $row['studentid'];
        $_SESSION['student_id'] = $id;
        echo "
               <tr>
               <td >" . $row["studentname"] . "</td>
               <td>" . $row["studentpercent"] . "%</td>
               <td>" . $row["studentlettergrade"] . "</td>
               <td>
               <a type=\"button\" class=\"btn btn-outline-dark\">Update</a>
               <a type=\"button\" class=\"btn btn-outline-dark\" href=\"deleteStudent?id=" . $row['studentid'] . "\"> Delete</a>
               </tr>
               ";
    }
}

echo "  </table>";
$conn->close();
