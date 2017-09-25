<?php
session_start();

//include a file that has variables we will use over again in the site.
require "vars.php";

//If we are sent both a username and password
if(isset($_POST['email']) && isset($_POST['password']))
{
	//Assign these values to variables to save typing
	$password = $_POST['password'];
	$email = $_POST['email'];


	// Create connection
	$conn = new mysqli($servername, $dbusername, $dbpassword, $database);

	// Check connection
	if (!$conn->connect_error)
	{
		//If we can prepare a statement
		if($stmt = $conn->prepare("SELECT id, name FROM users WHERE email=? and password=?"))
		{

			//Bind the two variables to the two question marks.  ss means the variables will be strings.
			$stmt->bind_param("ss", $email, $password);

			//Salt the password
			$password = $saltLeft.$password.$saltRight;
			//Hash the password
			$password = hash('ripemd160', $password);

			//submit the statement to mysql
			$stmt->execute();

			//If there was a result
			if($stmt->bind_result($id, $name))
			{
				//if we can get the values from the result
				if($stmt->fetch())
				{
					//Set session variables for the username and user id.
					$_SESSION['id_user'] = $id;
					$_SESSION['name'] = $name;

					//echo success back out to the ajax call.
					echo "success";
				}
				else //We couldn't fetch the result
				{
					echo "Bad database results.";
				}
			}
			else //We did not get an id back from the database
			{
				echo "Your username or password did not match our records.";
			}
		}
		else //We could not prepare the statement perhaps because of bad values
		{
			echo "Unable to create the query." ;
		}

	}
	else //The connection failed so we send back an error
	{
		echo "Database connection failed. Please try again in the future.";
	}
}
else //We did not get all the data we were expecting
{
	echo "You must provide both a username and password." ;
}

?>
