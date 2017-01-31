<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>processing</title>
</head>

<body>

<?php

$host="localhost"; // Host name 
$username="root"; // Mysql username 
$password=""; // Mysql password 
$db_name="gmobile"; // Database name 

$con=mysql_connect($host,$username,$password)or die("cannot connect"); 
mysql_select_db($db_name,$con)or die("cannot select DB");

$rollno=htmlspecialchars(trim($_POST['rollno']));
$q=htmlspecialchars(trim($_POST['eve']));
$comm=htmlspecialchars(trim($_POST['Comment']));

 $sql="INSERT INTO `gmobile`.`feedeve` (`sno`, `rollno`, `q`, `comment`) VALUES  (NULL,'$rollno','$q','$comm')";
    $result=mysql_query($sql) or die(mysql_error());
 
mysql_close($con);
?>

</body>
</html>
