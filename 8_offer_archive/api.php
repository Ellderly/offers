<?php

const BOOTSTRAP = true;

require_once __DIR__ . '/init.php';
$getBuyerParams = require_once __DIR__ . '/config.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization');
header('Access-Control-Allow-Methods: POST');

$curl = curl_init();
$name = $_POST['name'] ?? null;
$lastname = $_POST['lastname'] ?? null;
$email = $_POST['email'] ?? null;
$ip = $_SERVER['REMOTE_ADDR'];
$phone = $_POST['phone'] ?? null;

$configBuyerParams = $getBuyerParams(intval($_POST['aff_id'] ?? null));  

$payload = [
    'userip' => $ip,
    'firstname' => $name,
    'lastname' => $lastname,
    'email' => $email,
    'password' => INTERCOM_PASSWORD,
    'phone' => preg_replace('/\D/', '', $phone),

    'ai' => $_POST['ai'] ?? $configBuyerParams['ai'] ?? null,
    'gi' => $_POST['gi'] ?? $configBuyerParams['gi'] ?? null,
    'so' => $configBuyerParams['so'] ?? FUNNEL_NAME,

    'sub' => $_POST['subid'] ?? null,
    'ci' => '1',

    'ad' => $_POST['utm_ad'] ?? null,
    'term' => $_POST['utm_term'] ?? null,
    'campaign' => $_POST['utm_campaign'] ?? null,
    'medium' => $_POST['utm_medium'] ?? null,


    // Присвоение значений для MPC меток
    'MPC_1' => $_POST['account'] ?? null,
    'MPC_2' => $_POST['target'] ?? null,
    'MPC_3' => $_POST['creative'] ?? null,
    

    'lg' => $_POST['lg'] ?? $configBuyerParams['lg'] ?? null,
];

for ($i = 1; $i <= 12; $i++) {
    if (isset($_POST["mpc_$i"])) {
        $payload["MPC_$i"] = $_POST["mpc_$i"];
    }
}

// if (isset($_POST['print_payload'])) {
//     echo '<pre>' . print_r($payload, true) . '</pre>';
//     die;
// }

$jsonPayload = json_encode(array_filter($payload), JSON_UNESCAPED_UNICODE);


curl_setopt_array($curl, [
  CURLOPT_URL => TRACKBOX_BASE_URL . '/signup/procform',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 5,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => $jsonPayload,
  CURLOPT_HTTPHEADER => [
    "x-trackbox-username: {$configBuyerParams['trackbox_user']}",
    "x-trackbox-password: {$configBuyerParams['trackbox_password']}",
    'x-api-key: ' . TRACKBOX_API_KEY,
    'Content-Type: application/json',
  ],
]);

$response = curl_exec($curl);
curl_close($curl);

file_put_contents('log_submit_data.txt', date('Y-m-d H:i:s', strtotime('+2 hours')) . PHP_EOL . 'RESPONSE: ' . print_r($response, true) . PHP_EOL . PHP_EOL, FILE_APPEND);
file_put_contents('log_submit_data_leads.txt', date("Y-m-d H:i:s") . "\t" . json_encode($payload) . "\t" . $response . PHP_EOL, FILE_APPEND);

if ($_SERVER['CONTENT_TYPE'] !== 'application/json') {
    header('Content-Type: application/json');
    echo json_encode([
        'status' => true,
    ]);
} else {
    header("Location: thanks.php?" . http_build_query($_POST));
}
exit();
