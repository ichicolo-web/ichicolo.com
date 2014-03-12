<?php
$name = htmlspecialchars($_POST["name"],ENT_QUOTES);
$email = htmlspecialchars($_POST["email"],ENT_QUOTES);
$tel = htmlspecialchars($_POST["tel"],ENT_QUOTES);
$description = htmlspecialchars($_POST["description"],ENT_QUOTES);

$to="ichicolo.com@gmail.com";
$title="Message to ichicolo.com";
$all="
お名前：$name
E-mailアドレス：$email
電話番号：$tel
お問い合わせ内容：$description";
mail($to,$title,$all,"FROM:$email");

//返信用
$reply_title="お問い合わせありがとうございます。";
$reply_all="このメールは自動送信です。
このたびはお問い合わせいただき、誠にありがとうございます。
今一度ご入力内容をご確認いただきますようよろしくお願いいたします。
お名前：$name
住所：$address
E-mailアドレス：$email
電話番号：$tel
カテゴリー：$category
お問い合わせ内容：$description
改めてご連絡させていただきますので今しばらくお待ちいただきますようよろしくお願いいたします。";
mail($email,$reply_title,$reply_all,"FROM:$to");

header("Location: /#!/contacts");

exit;
