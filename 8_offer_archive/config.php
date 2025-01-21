<?php

if (!defined('BOOTSTRAP') || BOOTSTRAP !== true) {
    exit;
}

const FUNNEL_NAME = 'Revo_Quiz_RU_v1';

const INTERCOM_PASSWORD = 'QWERTY12345';
const TRACKBOX_BASE_URL = 'https://tb.templetrack.xyz/api';
const TRACKBOX_API_KEY = '2643889w34df345676ssdas323tgc738';


$config = [
    1 => [
        'ai' => '2958035',
        'trackbox_user' => 'HeadAM',
        'trackbox_password' => '453fgsgdsJf',

        // 'so' => "Meta_Quiz_RU", // если пусто то будет значение из FUNNEL_NAME (можно или оставить null или вообще убрать)
        'lg' => null, // передается в значение параметра "lg" в запроос в CRM, необязательно задавать
    ],
    2 => [
        'ai' => '2958036',
        'trackbox_user' => 'ZDbuyer',
        'trackbox_password' => '%HyX$Q82fx@N8IDKO0$',

        // 'so' => "Meta_Quiz_RU", // если пусто то будет значение из FUNNEL_NAME (можно или оставить null или вообще убрать)
        'lg' => null, // передается в значение параметра "lg" в запроос в CRM, необязательно задавать
    ],
    3 => [
        'ai' => '2958037',
        'trackbox_user' => 'KMbuyer',
        'trackbox_password' => '&t&IWM9&Om*cj!lcju0',

        // 'so' => "Meta_Quiz_RU", // если пусто то будет значение из FUNNEL_NAME (можно или оставить null или вообще убрать)
        'lg' => null, // передается в значение параметра "lg" в запроос в CRM, необязательно задавать
    ],
    4 => [
        'ai' => '2958038',
        'trackbox_user' => 'OEbuyer',
        'trackbox_password' => '1U1bNLC7f^gVLoh9cLG',

        // 'so' => "Meta_Quiz_RU", // если пусто то будет значение из FUNNEL_NAME (можно или оставить null или вообще убрать)
        'lg' => null, // передается в значение параметра "lg" в запроос в CRM, необязательно задавать
    ],
];

return fn (int $buyerId) => $config[$buyerId];
