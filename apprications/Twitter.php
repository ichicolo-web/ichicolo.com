<?

require_once (dirname(__FILE__) . '/Config.php');
require_once (dirname(__FILE__) . '/twitteroauth/twitteroauth/twitteroauth.php');

class Twitter
{
  public function name ($max, $key) {
    $config = new Config();

    $twObj = new TwitterOAuth(
      $config->data()->twitter->consumer_key
      , $config->data()->twitter->consumer_secret
      , $config->data()->twitter->access_token
      , $config->data()->twitter->access_token_secret
    );
    
    $options = array(
      'count' => $max,
      'screen_name' => $key
    );
    
    $json = $twObj->OAuthRequest(
      'https://api.twitter.com/1.1/statuses/user_timeline.json'
      , 'GET'
      , $options
    );
    
    $decode = json_decode($json);
    $this->result = $decode;

    return $this->result;
  }
}
