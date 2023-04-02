<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  $to = 'thejoshuaopaleke@gmail.com';
  $subject = 'New form submission';
  $body = "Name: $name\nEmail: $email\nMessage:\n$message";
  
  if (mail($to, $subject, $body)) {
    echo 'Thank you for your message!';
  } else {
    echo 'There was a problem sending your message. Please try again later.';
  }
?>
