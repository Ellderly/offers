<?php
if (empty($_POST)) die("Bad request");

// Создание массива с данными
$data = array(
    "ip" => $_SERVER["HTTP_CF_CONNECTING_IP"] ?? $_SERVER["HTTP_X_FORWARDED_FOR"] ?? $_SERVER["REMOTE_ADDR"],
    "name" => $_POST['name'],
    "phone" => "+" . $_POST['phonesub'],
    "email" => $_POST['email'],
    "ua" => $_SERVER["HTTP_USER_AGENT"],
    "country" => $_POST['country'],
    "utm_source" => '1',
    "comment" => $_POST['comment'],
    "utm_campaign" => "GazPromTransGaz",
    "utm_medium" => 'AX',
    "utm_term" => $_POST['subid']
);

$data = http_build_query($data);

// Логирование отправляемых данных (лидов)
file_put_contents('lead_log.txt', date('Y-m-d H:i:s') . " - Sent data: " . print_r($data, true) . "\n", FILE_APPEND);

// Инициализация запроса к основному API
$ch = curl_init("https://aff999leads.com/api/wm/push.json?id=7-7bf6fb5caa755497dcef22cbb73e0270&offer=17&flow=25");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_TIMEOUT, 60);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_HEADER, false);

// Выполнение запроса и получение ответа
$response = curl_exec($ch);

// Логирование ответа от запроса
file_put_contents('lead_log.txt', date('Y-m-d H:i:s') . " - Response: " . print_r($response, true) . "\n", FILE_APPEND);

$html = json_decode($response, true);
curl_close($ch);

// Логирование ошибки, если запрос не удался
if (!$html) {
    file_put_contents('lead_log.txt', date('Y-m-d H:i:s') . " - cURL error: " . curl_error($ch) . "\n", FILE_APPEND);
    die("Error processing request");
}

$cabinet = $html['url'] ?? '';
setcookie("cabinet", $cabinet);

// Отправка конверсии в Keitaro
$keitaro_url = "http://82.117.243.119/bf2b9bf/postback";
$keitaro_data = [
    "subid" => $_POST['subid'],
    "status" => "lead",  // Замените статус на нужный
    "payout" => $_POST['payout']  // Убедитесь, что значение задано верно
];

$keitaro_query = http_build_query($keitaro_data);
$ch_keitaro = curl_init("{$keitaro_url}?{$keitaro_query}");
curl_setopt($ch_keitaro, CURLOPT_RETURNTRANSFER, true);
$keitaro_response = curl_exec($ch_keitaro);

// Логирование ответа от Keitaro
file_put_contents('lead_log.txt', date('Y-m-d H:i:s') . " - Keitaro Response: " . print_r($keitaro_response, true) . "\n", FILE_APPEND);

curl_close($ch_keitaro);

// Перенаправление на success.php с параметрами
header("Location: success.php?fbp=" . $_POST['fbp'] . '&bgplx=' . $_POST['bgplx']);
?>
