window.fbAsyncInit = function() {
  FB.init({
    appId      : '333556894274435',
    cookie     : true,
    xfbml      : true,
    version    : 'v7.0'
  });

  FB.AppEvents.logPageView();


  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      statusChangeCallback(response);
      let emailConteudo = document.querySelector("#emailConteudo");
      emailConteudoa.value = response.authResponse.accessToken

      console.log('teste'+response.authResponse.accessToken);
    }
  });

  FB.api('/me', function(response) {
      console.log(JSON.stringify(response));
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
