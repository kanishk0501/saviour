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
  //location.href="patientDetails1.html"
  usersRef.child("user0").update({
    age:age,
    gender:gender,
    birthday:birthday,
    ph_no:ph_no,
    guardianName: guardName,
    emergencyContact1:emcnt1,
    emergencyContact2:emcnt2,
    emergencyContact3:emcnt3,
    address:address,
    //governmentApprovedId:govtId,
    //medicalInsurance:medIns
  });
}

document.getElementById('medicalDetails').addEventListener('submit',formSubmit);
function formSubmit(e)
{
    e.preventDefault();
    let phyExamDates = document.querySelector('#phyExamDates').value;
    let healthProblems = document.querySelector('#ques1').value;
    let medications = document.querySelector('#ques2').value;
    let sixMonthsProb = document.querySelector('#healthProb').value;
    let hosp = document.querySelector('#hosp').value;
    let currmed1 = document.querySelector('#currmed1').value;
    let currmed2 = document.querySelector('#currmed2').value;
    let currmed3 = document.querySelector('#currmed3').value;
    let cond1 = document.querySelector('#cond1').value;
    let cond2 = document.querySelector('#cond2').value;
    let cond3 = document.querySelector('#cond3').value;
    let cond4 = document.querySelector('#cond4').value;
    let cond5 = document.querySelector('#cond5').value;
    let cond6 = document.querySelector('#cond6').value;
    let cond7 = document.querySelector('#cond7').value;
    let cond8 = document.querySelector('#cond8').value;
    let geneticDisorder = document.querySelector('#geneDisorder').value;
    let dietaryNeeds = document.querySelector('#dietaryNeeds').value;
    let physicalNeeds = document.querySelector('#physicalNeeds').value;
    let allergie1 = document.querySelector("allergie1").value;
    let allergie2 = document.querySelector("allergie2").value;
    let allergie3 = document.querySelector("allergie3").value;
    let allergie4 = document.querySelector("allergie4").value;
    let allergie5 = document.querySelector("allergie5").value;
    let allergie6 = document.querySelector("allergie6").value;

    sendMessage1(phyExamDates,healthProblems,medications,sixMonthsProb,hosp,currmed1,currmed2,currmed3,cond1,cond2,cond3,cond4,cond5,cond6,cond7,cond8,geneticDisorder,dietaryNeeds,physicalNeeds,allergie1,allergie2,allergie3,allergie4,allergie5,allergie6);
    

    document.getElementById('medicalDetails').reset()
}

function sendMessage1(phyExamDates,healthProblems,medications,sixMonthsProb,hosp,currmed1,currmed2,currmed3,cond1,cond2,cond3,cond4,cond5,cond6,cond7,cond8,geneticDisorder,dietaryNeeds,physicalNeeds,allergie1,allergie2,allergie3,allergie4,allergie5,allergie6)
{
  //location.href="patientDetails1.html"
  usersRef.child("user0").update({

    
    
    
  });
}
  
