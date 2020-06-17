<?php

try{
  $conn = new PDO("mysql:host=localhost;dbname=faststart", 'root', '');

  // if(empty($_POST['name'])) exit("Поле не заполнено");
  // if(empty($_POST['email'])) exit("Поле не заполнено");

  $query = "INSERT INTO message VALUES (NULL, :name, :email, NOW())";
  $msg = $conn->prepare($query);
  $msg -> execute(['name' => $_POST['name'], 'email' => $_POST['email']]);

  $msg_id = $conn->lastInsertId();

  $query = "INSERT INTO message_content VALUES (NULL, :content, :message_id)";
  $msg = $conn->prepare($query);
  $msg -> execute(['content' => $_POST['content'], 'message_id' => $msg_id]);

  header("Location: index.php");
}
catch (PDOException $e)
{
  echo "error" .$e->getMessage();
}


?>