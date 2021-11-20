<?php
  // use wordwrap() if lines are longer than 70 characters
  $msg = $_POST['Comment'];
  $msg = wordwrap($msg,70);
  $subject = $_POST['Subject'] ."from: ". $_POST['Email'];
  $to = "manuelalfonzo.ml@gmail.com";
  // send email
  if(mail($to,$subject,$msg))
  {
  echo "Message Sent! Thank You!";
  }
  else{
      echo "Error. <br> Message Failed";
  }

?>