<?php

$post = (object) $_POST;

$to = 'contact@ichicolo.com';
$subject= 'ichicolo.com/問い合わせがありました。';
$header = "MIME-Version: 1.0\r\n"
  . "Content-Transfer-Encoding: 7bit\r\n"
  . "Content-Type: text/plain; charset=ISO-2022-JP\r\n"
  . "Message-Id: <" . md5(uniqid(microtime())) . "@ichicolo.com>\r\n"
  . "From: ichicolo<contact@ichicolo.com>\r\n";

$name = 'Name : ' . $post->name;
$email = 'E-mail : ' . $post->email;
$address = 'Address : ' . @$post->address;
$content = 'Content : ' . "\n" . preg_replace( '/<br \/>/', '', $post->content) . "\n";
$bodyTextData = implode("\n\n", array($name, $email, @$address, $content));

mb_language('uni');
mb_internal_encoding('UTF-8');

if (mb_send_mail($to, $subject, $bodyTextData, mb_encode_mimeheader($header), "-f contact@ichicolo.com")) {
  $notification = 'success';

  /**
   * 返信
   */
  $replySubject = 'Thank you for your contact! / ichicolo';
  $content = 'Content : ' . "\n" . preg_replace( '/<br \/>/', '', $post->content) . "\n" . 'Thank you for your contact.' . "\n" . 'We will contact you after checking your message.' . "\n" . 'このたびはお問い合わせいただき、誠にありがとうございます。' . "\n" . '改めてご連絡させていただきますので、今しばらくお待ちいただきますようよろしくお願いいたします。'. "\n";
  $bodyTextData = implode("\n\n", array($name, $email, @$address, $content)); 

  mb_send_mail($post->email, $replySubject, $bodyTextData, mb_encode_mimeheader($header), "-f contact@ichicolo.com");
}

else{
  $notification = 'failed';
}
