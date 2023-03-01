<?php

include "db-server.php";
    
    $email = $_POST['email'];
    $password = $_POST['password'];
    $encPassword=md5($password);

    $sql = "select * from signup_data_store where email='$email'";
    $result=mysqli_query($connect,$sql);
    $row=mysqli_fetch_assoc($result);
    
    if($row['email']==$email && $row['password']==$encPassword){
        print '0';

    }else{
        print '1';
    }

?>