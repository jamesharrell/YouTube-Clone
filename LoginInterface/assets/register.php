<?php

session_start();

require "vars.php";

if(isset($_POST['name']) && isset($_POST['password']) && isset($_POST['email']))
{

	$name = $_POST['name'];
	$password = $_POST['password'];
	$email = $_POST['email'];

	// Create connection
	$conn = new mysqli($servername, $dbusername, $dbpassword, $database);

	// If there's no connection error
	if (!$conn->connect_error)
	{
		//If we can prepare the mysql statement
		if($stmt = $conn->prepare("INSERT INTO users (name, password, email) VALUES (?, ?, ?)"))
		{
			//Bind the variables
			$stmt->bind_param("sss", $name, $password, $email);

			//Salt the password
			$password = $saltLeft.$password.$saltRight;
			//Hash the password
			$password = hash('ripemd160', $password);

			//If the statement succeeds, lets go ahead and start a session instead of making them login, and echo success to the ajax call
			if($stmt->execute())
			{
				$_SESSION['id_user'] = $stmt->insert_id;
				$_SESSION['name'] = $name;
				echo "success";
			}
			else
			{
				echo "User creation failed (Bad Query)";
			}
		}
		else //We couldn't prepare the statement
		{
			echo "Unable to create the query.";
		}
	}
	else //The connection failed so we send back an error
	{
		echo "Database connection failed. Please try again in the future.";
	}
}
else //We were not sent all the the variables
{
	echo "You did not provide all the necessary data." ;
}

?>
