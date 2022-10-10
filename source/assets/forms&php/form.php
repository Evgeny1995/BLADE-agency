<?php

if($_POST['SUBMIT']){
	// Адрес куда будут уходить письма

	$to = 'mainrub06@gmail.com';

	// Регулярные вырожения валидации мыла и телефона
	$validEMAIL = '/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i';
	$validPHONE = '/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/';

	// Данные с формы

	$name  = trim($_POST['name']);
	// $email  = trim($_POST['email']);
	$checkbox = $_POST['checkbox'];
	$contact = str_replace(' ','', $_POST['tel']);
	$theme = trim($_POST['SUBMIT']);

	// $color = trim($_POST['color']);
	// $type = trim($_POST['type']);
	// $square = trim($_POST['square']);
	// $city = trim($_POST['city']);


	// if($email === '') {
	// 	$email = 'empty';
	// }
	// if($type === '') {
	// 	$type = 'empty';
	// }
	// if($square === '') {
	// 	$square = 'empty';
	// }
	// if($city === '') {
	// 	$city = 'empty';
	// }
	// if($color === '') {
	// 	$color = 'empty';
	// }

	// Валидация данных
	if(!$name) { print "Пожалуйста представьтесь!"; exit(); }
	if(!$contact) { print "Введите номер телефона"; exit(); }
	elseif(!preg_match($validPHONE,$contact)){
		print "Проверьте номер телефона"; exit();
	}

	// Сборка заголовка будующего письма

	$headers  = "Content-type: text/html; charset=\"utf-8\"\r\n";
	$headers .= "From: =?utf-8?b?". base64_encode($name)."?= <robot@{$_SERVER['HTTP_HOST']}> \r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
	// $headers .= "CC: info@umax.agency\r\n";
	// $headers .= "CC: copia@copy.ru\r\n";

	// Сборка тела будующего письма
	$message = "<h3>$theme</h3>
				<p><b>Имя: </b>$name</p>
				<p><b>Телефон: </b>$contact</p>";

        // <p><b>Email: </b>$email</p>
				// <p><b>Цвет: </b>$color</p>
				// <p><b>Город установки: </b>$city</p>
				// <p><b>Тип помещения: </b>$type</p>
				// <p><b>Площадь Кв.м: </b>$square</p>
				// <p><b>Цвет: </b>$color</p>
	if ($checkbox !== 'on') {
		exit();
	}
	// Отправка сообщения
	if(!mail($to,'=?utf-8?b?'.base64_encode($theme).'?=' , $message, $headers)){
		print 'Ошибка отправки! Повторите позже!';
		exit();
	}
	exit();
}
?>
