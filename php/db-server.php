<?php

$connect=new mysqli('localhost','root','','userinfo');

if(!$connect){
    die(mysqli_error($connect));
}

?>