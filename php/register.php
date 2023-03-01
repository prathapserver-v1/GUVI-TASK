<?php

include "db-server.php";

    $name = $_POST['name'];
    $email = $_POST['email'];
    $dob = $_POST['dob'];
    $password = $_POST['password'];
    $encPassword=md5($password);

    $sql = "insert into signup_data_store(name,email,dob,password) values('$name','$email','$dob','$encPassword')";
    $result = mysqli_query($connect, $sql);
    
    if ($result) {
        print '0';
        
    } else {
        print '1';
        die(mysqli_error($connect));

    }

?>