<?php

$name = $_POST['name'];
$password = $_POST['password'];
$email = $_POST['email'];
$gender = $_POST['gender'];
$pelefon = $_POST['pelefon'];

if(mb_strlen($name)<5 || mb_strlen($name)>40)
{
    echo "Довжина не  дозволена для Логіну";
    exit();
}else if(mb_strlen($password)<5|| mb_strlen($password)>40){
    
    echo "Довжина не  дозволена для Паролю";
    exit();
} else if(mb_strlen($email)<5|| mb_strlen($email)>40){
    
    echo "Довжина не  дозволена для Почти ";
    exit();
}
$mysql = new mysqli('localhost','root','','registration');
$mysql->query("INSERT INTO `registration`(`name`,`password`,`email`,`gender`,`pelefon`)
VALUES('$name','$password','$email','$gender','$pelefon')");
$mysql->close();
 ?>