<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thanks</title>
  <!-- Facebook Pixel Code -->
  <script>
    ! function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '<?= $_POST['pixel'] ?>');
    fbq('track', 'PageView');
    fbq('track', 'Lead');
  </script>
  <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=<?= $_POST['pixel'] ?>&ev=Lead&noscript=1" /></noscript>
  <!-- End Facebook Pixel Code -->
</head>

<body id="um-tp-standard-es">
  <style>
    .title {
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      color: #2D2F32;
      margin-bottom: 15px;
      width: 460px;
    }

    .footer {
      border-top: none;
    }

    @media screen and (max-width: 880px) {
      .title {
        width: 100%;
      }
    }

    * {
      margin: 0;
      padding: 0;
    }

    html,
    body {
      height: 100%;
    }

    body {
      font-family: sans-serif;
    }

    .wrapper {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .content {
      flex: 1 0 auto;
    }

    .footer {
      flex: 0 0 auto;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .logo {
      margin-top: 30px;
    }

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .general {
      display: flex;
      max-width: 620px;
    }

    .ty-text {
      color: #5DA9DD;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 25px;
    }

    .title {
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      color: #2D2F32;
      margin-bottom: 15px;
    }

    .sub-title {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      margin-bottom: 30px;
      color: #5A5C5C;
    }

    .marked-text {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      color: #A9B4C2;
    }

    .footer {
      display: flex;
      border-top: 1px solid rgba(169, 180, 194, 0.2);
      height: 80px;
    }

    .footer-text {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      text-align: center;
      color: #A9B4C2;
    }

    .footer__container {
      display: flex;
      align-items: center;
    }

    .call-icon img {
      margin-top: 21%;
    }

    .call-icon {
      min-width: 150px;
    }

    @media screen and (max-width:500px) {
      .general {
        display: flex;
        max-width: 620px;
        flex-direction: column;
      }

      .call-icon {
        display: flex;
        min-height: 150px;
        justify-content: center;
      }

      .ty-text,
      .title,
      .sub-title,
      .marked-text {
        text-align: center;
      }

      .footer__container {
        display: flex;
        align-items: center;
      }

      .marked-text {
        margin-bottom: 15px;
      }
    }

    .logo {
      margin-top: 15px;
    }

    .okicon {
      position: relative;
      display: inline-block;
      background-color: #34bf49;
      width: 90px;
      height: 90px;
      text-align: center;
      line-height: 133px;
      border: 2px solid #34bf49;
      border-radius: 50%;
      box-shadow: rgb(66, 219, 89, 0.25) 0px 54px 55px, rgb(66, 219, 89, 0.12) 0px -12px 30px, rgb(66, 219, 89, 0.12) 0px 4px 6px, rgb(66, 219, 89, 0.17) 0px 12px 13px, rgb(66, 219, 89, 0.09) 0px -3px 5px;
    }

    .okicon:after {
      content: '';
      display: block;
      position: absolute;
      top: -12px;
      left: -12px;
      right: -12px;
      bottom: -12px;
      border: 2px solid #34bf49;
      border-radius: 50%;
    }
  </style>

  <div class="wrapper">
    <header class="header" style="padding-top:10px">
      <div class="container">
        -
        <!-- Put Logo Here For Consistency -->
      </div>
    </header>
    <div class="content">
      <div class="container">
        <div class="general">
          <div class="call-icon">
            <div class="okicon">
              <svg viewBox="0 0 24 24" width="50" height="50" stroke="#fff" stroke-width="1.3" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
          </div>
          <div class="general-text">
            <p class="ty-text">Tebrikler!</p>
            <h1 class="title">Çağrımızı kaçırmayın</h1>
            <p class="sub-title">24 saat içinde aramamızı bekleyin - bu çağrıyı kaçırmayın, aksi halde sistemdeki diğer katılımcı sizin yerinizi alabilir!</p>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container footer__container">
        <p class="footer-text">«b2go» ©2010-<?= date("Y"); ?>.</p>
      </div>
    </footer>
  </div>
</body>

</html>


<?php

$name = stripslashes(htmlspecialchars($_POST['name']));
$secondname = stripslashes(htmlspecialchars($_POST['second_name']));
$phone = stripslashes(htmlspecialchars($_POST['phone']));
$code = stripslashes(htmlspecialchars($_POST['code']));
$email = stripslashes(htmlspecialchars($_POST['email']));
$country = stripslashes(htmlspecialchars($_POST['country']));
$subid = stripslashes(htmlspecialchars($_POST['subid']));

$data = [
  "pass" => 'altr0711',
  "name" => $name,
  "second_name" => $secondname,
  "phone" =>  preg_replace('/[^0-9]/', '', $code . $phone),
  "email" => $email,
  "http_referer_term" => "MX",
  "country" => $country,
  "lang" => "TR",
  "host" => stripslashes(htmlspecialchars($_SERVER['HTTP_HOST'])),
  "group" => "b2go", // Put Here correct offer
  "utm" => $_POST['utm'],
  "subid" => $subid,
  "ip" => $_SERVER['REMOTE_ADDR'],
  "owner" => 0, // Put Here your ID
];

$ch = curl_init('https://api.altairlabs.pro/api/create');
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

curl_setopt($ch, CURLOPT_TIMEOUT, 60);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_HEADER, false);
$html = json_decode(curl_exec($ch), 1);
curl_close($ch);

# Autologin
if (isset($html['broker']['redirect'])) {
  echo '<meta http-equiv="refresh" content="2; URL=' . $html['broker']['redirect'] . '" />';
}
exit;
?>