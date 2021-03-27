  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBwP6gBoeKxJPTJ7rsnBiSikIbXaz2KTJk",
    authDomain: "winhacks-868b0.firebaseapp.com",
    databaseURL: "https://winhacks-868b0-default-rtdb.firebaseio.com",
    projectId: "winhacks-868b0",
    storageBucket: "winhacks-868b0.appspot.com",
    messagingSenderId: "687624844034",
    appId: "1:687624844034:web:e133b20470ecdda803c81b",
    measurementId: "G-QT4KG27G06"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
// google Authentication 
  function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var bt=document.getElementById('sgnoutbt');
    bt.style.display="block";

    var profile = googleUser.getBasicProfile();
    var ID = profile.getId(); // unique ID
    var Name = profile.getName(); // full name
    var givenName = profile.getGivenName(); // first name
    var Image = profile.getImageUrl(); // 
    var email = profile.getEmail();
    var id_token = googleUser.getAuthResponse().id_token; // token goes to FireBase
  }

  function signOut()
  {
      gapi.auth2.getAuthInstance().signOut().then(function()
      {
          console.log('user signed out')
      })
      var bt=document.getElementById('sgnoutbt');
        bt.style.display="none";
  }