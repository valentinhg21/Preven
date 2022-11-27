<?php

  //Capturo los datos enviados desde el formulario
  $nombre = $_POST['nombre'];
  $tel = $_POST['tel'];
  $email = $_POST['email'];
  $mensaje = $_POST['mensaje'];

  // Email donde llegan los mensajes
  $to = 'valen21hg@outlook.com';
  $from = $email;
  $subject = "Mensaje de cotización";

  // Las 2 primeras lineas habilitan el informe de errores
  ini_set( 'display_errors', 1 );
  error_reporting( E_ALL );
  //Mensaje
  $htmlContent = "
  <!DOCTYPE html>
  <html lang='en'>
  <head>
      <meta charset='UTF-8'>
      <meta http-equiv='X-UA-Compatible' content='IE=edge'>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'>
      <title>Document</title>
  </head>
  <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&family=Roboto:wght@100;300;400;500;700;900&display=swap');
      body{
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          font-family: 'Roboto', sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background: #f1f1f1;
          width: 100%;
      }
      .container-mail{
          width: 100%;
          display: inline-block;
          justify-content: center;
          align-items: center;
          flex-direction: column;
      }
      .mail-header{
          background: #6AB43E;
          text-align: center;
          width: 100%;
          flex-direction: column;
          padding-top: 2rem;
          padding-bottom: .8rem;
      }
      .mail-header > img{
          width: 30%;
      }
      .mail-body{
          margin-top: -3rem;
          background: #fff;
          padding: 2rem 2rem 2rem 2rem;
          border-radius: 6px;
          display: inlin-block;
          box-shadow: 0 16px 44px rgba(0, 0, 0, 0.15)  ; 
      }
      .mail-body h2{
          margin-top: 2rem;
          color: #222;
          font-size: 2rem;
          line-height: 0;
      }
      .mail-body p{
          font-size: 16px;
          color: #222;
      }
      .mail-body h3{
          margin-top: 3rem;
          margin-bottom: 0;
      }
      .mail-body ul{
          display: inline-block;
          margin-top: .5rem;
          list-style: none;
          padding: 0;
      }
      .mail-body ul li{
          margin-top: 0;
          margin-bottom: 0;
      }
      .mail-body h4{
          margin-top: .6rem;
          padding: 0;
          margin-bottom: .6rem;
          font-weight: normal;
          line-height: 26px;
      }
      .mail-body h4 span{
          font-weight: bold;
      }
  
      .mail-body .tag{
          font-size: 12px;
          color: #6AB43E;
          font-weight: bold;
      }
  
      @media only screen and (min-width: 376.5px) and (max-width: 600px){
          .mail-header > img{
          width: 45%;
          }
          .mail-body{
              width: 100%;
  
          }
          .mail-body h2{
          margin-top: 1.5rem;
          font-size: 1.6rem;
          }
          .mail-body h3{
          margin-top: 1.5rem;
          margin-bottom: 0;
          font-size: 1.2rem;
          }
          .mail-body p{
          font-size: 16px;
          color: #222;
      }
      }
      @media only screen and (min-width: 600.5px) and (max-width: 800px){
          .mail-header > img{
          width: 40%;
          }
          .mail-body{
              width: 100%;
  
          }
          .mail-body h2{
          margin-top: 1.6rem;
          font-size: 1.7rem;
          }
          .mail-body h3{
          margin-top: 1.6rem;
          margin-bottom: 0;
          font-size: 1.3rem;
          }
          .mail-body p{
          font-size: 16px;
          color: #222;
          }
      }
      @media only screen and (min-width: 800.5px) and (max-width: 1024px){
  
          .mail-header > img{
          width: 35%;
          }
          .mail-body{
              width: 100%;
  
          }
          .mail-body h2{
          margin-top: 1.7rem;
          font-size: 1.8rem;
          }
          .mail-body h3{
          margin-top: 1.7rem;
          margin-bottom: 0;
          font-size: 1.4rem;
          }
          .mail-body p{
          font-size: 16px;
          }
      }
      @media only screen and (min-width: 1024.5px) and (max-width: 1240px){
  
          .mail-header > img{
          width: 25%;
          }
          .mail-body{
              width: 100%;
  
          }
          .mail-body h2{
          margin-top: 1.8rem;
          font-size: 1.9rem;
          }
          .mail-body h3{
          margin-top: 1.8rem;
          margin-bottom: 0;
          font-size: 1.5rem;
          }
          .mail-body p{
          font-size: 16px;
          }
      }
      @media only screen and (min-width: 1240.5px) and (max-width: 1599px){
          .mail-header > img{
          width: 18%;
          }
          .mail-body{
              width: 100%;
  
          }
          .mail-body h2{
          margin-top: 1.9rem;
          font-size: 2rem;
          }
          .mail-body h3{
          margin-top: 1.9rem;
          margin-bottom: 0;
          font-size: 1.6rem;
          }
          .mail-body p{
          font-size: 16px;
          }
      }
  </style>
  <body>
      <div class='container-mail'>
          <div class='mail-header'>
              <img src='https://i.imgur.com/9vbJrZp.png' alt=''>
          </div>
          <div class='mail-body'>
            <span class='tag'>Concepción del Uruguay</span>
            <h2>Hola Preven.</h2>
            <p>Hay un nuevo mensaje de <strong>$nombre</strong></p>
            <strong><h3>Detalles del cliente:</h3></strong>
            <ul>
                <li>
                    <h4>Nombre: <span>$nombre</span></h4>
                </li>
                <li>
                    <h4>Teléfono: <span>$tel</span></h4>
                </li>
                <li>
                    <h4>Email: <span>$email</span></h4>
                </li>
                <li>
                    <h4>Mensaje: <span>$mensaje</span></h4>
                </li>
            </ul>
          </div>
      </div>
  </body>
  </html>
";


  //para el envío en formato HTML 
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
  // More headers
  $headers .= "From: <$email>" . "\r\n";
  $headers .= "Cc: $to" . "\r\n";
  

  // esta funcion ejecuta el correo PHP
  $sendMail = mail($to, $subject, $htmlContent, $headers);

  if( $sendMail ) {
    echo json_encode(array(
      'error' => false,
      'mensaje' => "El mensaje se ha enviado exitosamente!"
    ));
  } else {
    echo json_encode(array(
      'error' => true,
      'mensaje' => "Hubo un problema al enviar su mensaje. Intentélo más tarde."
    ));
  } 


?>