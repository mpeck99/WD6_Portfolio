<?php
/**
 * Created by PhpStorm.
 * User: MorganPeck
 * Date: 5/11/18
 * Time: 1:46 PM
 */
class addStudent{
    public function add(){
        $servername = "localhost";
        $username = "root";
        $password = "root";
        $dbname = "grades";

// Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        $name = $_POST["name"];
        $percent = $_POST["percent"];
        $letterGrade='';
        if(is_numeric($percent)){
            if($percent>=90){
                $letterGrade = 'A';
                echo $letterGrade;
            }
            else if($percent>=80 && $percent<=89){
                $letterGrade = 'B';
                echo $letterGrade;
            }
            else if($percent>=70 && $percent<=79){
                $letterGrade = 'C';
                echo $letterGrade;
            }
            else if($percent>=60 && $percent<=69){
                $letterGrade ='D';
                echo $letterGrade;
            }
            else if($percent<60){
                $letterGrade = 'F';
                echo $letterGrade;
            }
            $sql = "INSERT INTO grades (studentname, studentpercent, studentlettergrade)
        VALUES ('$name','$percent','$letterGrade')";

            if ($conn->query($sql) === TRUE) {
                echo "New record created successfully";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
            $conn->close();
            header("Location: http://127.0.0.1");
            die();
        }
        else{
            echo "Only enter valid percentages! No letters please!";
        }


    }

}
