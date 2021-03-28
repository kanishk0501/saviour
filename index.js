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
  var usersRef = firebase.database().ref('Users');


// google Authentication 
  function onSignIn(googleUser) {
   // sign out button
    var bt=document.getElementById('sgnoutbt');
    var bt1=document.getElementById('bt1');
    var bt2=document.getElementById('bt2');
    bt.style.display="block";
    bt1.style.display="block";
    bt2.style.display="block";
    // data to be sent to firebase
    var profile = googleUser.getBasicProfile();
    var userAccessId = profile.getId(); // unique ID
    var Name = profile.getName(); // full name
    var givenName = profile.getGivenName(); // first name
    var Image = profile.getImageUrl();
    var email = profile.getEmail();
    var id_token = googleUser.getAuthResponse().id_token; // token goes to 
    abc=userAccessId;
    
    
   //sending data to firebase
   usersRef.child("user0").set({
    uid:userAccessId,
    name:Name,
    firstName:givenName,
    profilePic: Image,
    email:email,
    userId:id_token});

   }
// Sign out Button functionalities
   function signOut()
  {
      gapi.auth2.getAuthInstance().signOut().then(function()
      {
          console.log('user signed out')
      })
      var bt=document.getElementById('sgnoutbt');
      var bt1=document.getElementById('bt1');
      var bt2=document.getElementById('bt2');
        bt.style.display="none";
        bt1.style.display="none";
        bt2.style.display="none";
  }

  
  
  //Sending Personal Details to firebase
  document.getElementById('personalDetails').addEventListener('submit',formSubmit);
  function formSubmit(e)
  {
    e.preventDefault();
    let age = document.querySelector('#age').value;
    let gender = document.querySelector('#gender').value;
    let birthday = document.querySelector('#birthday').value;
    let ph_no = document.querySelector('#ph_no').value;
    let guardName = document.querySelector('#guardName').value;
    let emcnt1 = document.querySelector('#emcnt1').value;
    let emcnt2 = document.querySelector('#emcnt2').value;
    let emcnt3 = document.querySelector('#emcnt3').value;
    let address = document.querySelector('#address').value;
    //let govtId = document.querySelector('#govtId').value;
    //let medIns = document.querySelector('#medIns').value;

    sendMessage(age,gender,birthday,ph_no,guardName,emcnt1,emcnt2,emcnt3,address);
    

    document.getElementById('personalDetails').reset()
}

function sendMessage(age,gender,birthday,ph_no,guardName,emcnt1,emcnt2,emcnt3,address)
{
  location.href="patientDetails1.html";
  usersRef.child("user0").update({
    age:age,
    gender:gender,
    birthday:birthday,
    phoneNumber:ph_no,
    guardianName: guardName,
    emergencyContact1:emcnt1,
    emergencyContact2:emcnt2,
    emergencyContact3:emcnt3,
    address:address,
    //governmentApprovedId:govtId,
    //medicalInsurance:medIns
  });
}

  //Uploading Government ID
/*document.getElementById("send").addEventListener("click", function() {
  //checks if files are selected
  if (govtID.length != 0) {

  //Loops through all the selected files
  for (let i = 0; i < govtID.length; i++) {

    //create a storage reference
    var storage = firebase.storage().ref(govtID[i].name);

    //upload file
    var upload = storage.put(govtID[i]);

    //update progress bar
    upload.on(
      "state_changed",
      function progress(snapshot) {
        var percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        document.getElementById("progress").value = percentage;
      },

      function error() {
        alert("error uploading file");
      },

      function complete() {
        document.getElementById(
          "uploading"
        ).innerHTML += `${files[i].name} upoaded <br />`;
      }
    );
  }
  } else {
  alert("No file chosen");
  }
  });

  //Upload Medical Insurance

  document.getElementById("send").addEventListener("click", function() {
    //checks if files are selected
    if (medIns.length != 0) {

    //Loops through all the selected files
    for (let i = 0; i < medIns.length; i++) {

      //create a storage reference
      var storage = firebase.storage().ref(medIns[i].name);

      //upload file
      var upload = storage.put(medIns[i]);

      //update progress bar
      upload.on(
        "state_changed",
        function progress(snapshot) {
          var percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          document.getElementById("progress").value = percentage;
        },

        function error() {
          alert("error uploading file");
        },

        function complete() {
          document.getElementById(
            "uploading"
          ).innerHTML += `${files[i].name} upoaded <br />`;
        }
      );
    }
    } else {
    alert("No file chosen");
    }
    });
*/