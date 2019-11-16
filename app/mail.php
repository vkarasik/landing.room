<?php
if( ! empty($_POST) ) {

    $data = (object) $_POST;
    $to = 'marketing@cd-life.by, info@cdlroom.by';
    $subject = 'Обратный звонок ' . $data->title;
    $message = 'Имя: ' . $data->name . ' Телефон: ' . $data->tel;

    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: cdlroom.by <from@example.com>\r\n";

    mail($to, $subject, $message, $headers);

    echo ('Спасибо, Ваш запрос отправлен! Мы свяжемся с вами в ближайшее время.');
} 
?>