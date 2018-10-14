<!doctype html>
<html>
<head>
<meta charset="UTF-8">
</head>

<body>
	
	<?php
if($_POST["message"]) {
    mail("hello@sammiidesign.co.uk", "Form to email message", $_POST["message"], "From: an@email.address");
}
?>
	
</body>
</html>