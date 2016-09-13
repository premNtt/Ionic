<?php
header('Access-Control-Allow-Origin: *');  

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "mytable";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM mytab";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
	// output data of each row
    while($row = $result->fetch_assoc()) {
       $data[] = array('firstname'=>$row["firstname"],
       					'lastname'=>$row["lastname"],
       					'email'=>$row["email"]); 
    }
    //echo "<pre>";    	
    //print_r($data);
    echo json_encode($data); 
} else {
    echo "0 results";
} 

$conn->close();
?>