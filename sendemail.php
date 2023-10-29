<?php
session_start();
$email_send = 'kolm777@mail.ru';
//dan_gr98@mail.ru
//E-mail: kolm777@mail.ru
	$_POST = json_decode(file_get_contents('php://input'), true);
     if(!empty($_POST['name']) && !empty($_POST['service']) && !empty($_POST['email']) && !empty($_POST['phone']) && !empty($_POST['comment'])){
     			//поменять имя last_access
     			if( !isset($_SESSION['last_access5'])){
     				$name = $_POST['name'];
	     			$service = $_POST['service'];
	     			$email = $_POST['email'];
	     			$phone = $_POST['phone'];
	     			$comment = $_POST['comment'];

	                //echo 'Данные успешно отправлены'; 
	                $_SESSION['last_access'] = 'now';
                  $email_user = $email;
                  $to  = "<".$email_user.">" ;

                        $subject = $service; 

                        $message = '
                            <html>
                            <head>
                              <title>'.$service.'</title>
                            </head>
                            <body>
                              <p>Услуга: '.$service.';</p>
                              <p>Текст: '.$comment.';</p> 
                              <p>Имя: '.$name.';</p>
                              <p>От: '.$email.';</p>
                              <p>Телефон: '.$phone.';</p>
                            </body>
                            </html>
                            ';

                        $headers = 'From: gt-usluga@example.com' . "\r\n" .
                        'Content-type: text/html; charset=UTF-8' . "\r\n" .
                        'Reply-To: '.$email . "\r\n" .
                        'X-Mailer: PHP/' . phpversion();

                        mail($to, $subject, $message, $headers);

	                $to  = "<".$email_send.">" ;

                        $subject = $service; 

                        $message = '
                            <html>
                            <head>
                              <title>'.$service.'</title>
                            </head>
                            <body>
                              <p>Услуга: '.$service.';</p>
                              <p>Текст: '.$comment.';</p> 
                              <p>Имя: '.$name.';</p>
                              <p>От: '.$email.';</p>
                              <p>Телефон: '.$phone.';</p>
                            </body>
                            </html>
                            ';

                        $headers = 'From: gt-usluga@example.com' . "\r\n" .
                        'Content-type: text/html; charset=UTF-8' . "\r\n" .
                        'Reply-To: '.$email . "\r\n" .
                        'X-Mailer: PHP/' . phpversion();

                      echo  mail($to, $subject, $message, $headers);
     			}
     			else{
     				echo 'Запрос уже отправлен';
     			}

     			
      }