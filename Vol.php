<?php
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$password = $_POST['password'];


$to ="korolevalera102@gmail.com";
$subject='Відпрвлена заявка реєстрації';
$message = "Зареєструвався майбутній волонтер $first_name з імейлом $email";
$headers = "З: $first_name <$email>" . "\r\n";
if(mail($to,$subject,$message,$headers))
{ echo 'ALL GOOD REGISTRATION';
}
else{
	echo 'Problem on server';
}
  

 ?>