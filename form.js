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

document.getElementById('medDetails').addEventListener('submit',formSubmit);
function formSubmit(f)
{
    f.preventDefault();
    let phyExamDate = document.querySelector('#phyExamDate').value;
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
    let dietaryNeeds = document.querySelector('#Diet').value;
    let physicalNeeds = document.querySelector('#phys').value;
    /*let a1 = document.querySelector("a1").value;
    let a2 = document.querySelector("a2").value;
    let a3 = document.querySelector("a3").value;
    let a4 = document.querySelector("a4").value;
    let a5 = document.querySelector("a5").value;
    let a6 = document.querySelector("a6").value;*/
    let allerDet = document.querySelector("allerDet").value;


         sendMessage(phyExamDate,healthProblems,medications,sixMonthsProb,hosp,currmed1,currmed2,currmed3,cond1,cond2,cond3,cond4,cond5,cond6,cond7,cond8,geneticDisorder,dietaryNeeds,physicalNeeds,allerDet)//,a1,a2,a3,a4,a5,a6);
    

    document.getElementById('medDetails').reset()
}

function sendMessage(phyExamDate,healthProblems,medications,sixMonthsProb,hosp,currmed1,currmed2,currmed3,cond1,cond2,cond3,cond4,cond5,cond6,cond7,cond8,geneticDisorder,dietaryNeeds,physicalNeeds,allerDet)//,a1,a2,a3,a4,a5,a6,allerDet)
{
  //location.href="patientDetails1.html"
  usersRef.child("user0").update({

    lastPhysicalExamDate: phyExamDate,
    healthProblems: healthProblems,
    medications: medications,
    problemsInSixMonths :sixMonthsProb,
    hospitalizationsDetails: hosp,
    currentMedications1: currmed1,
    currentMedications2: currmed2,
    currentMedications3: currmed3,
    chronicCondition1: cond1,
    chronicCondition2: cond2,
    chronicCondition3: cond3,
    chronicCondition4: cond4,
    chronicCondition5: cond5,
    chronicCondition6: cond6,
    chronicCondition7: cond7,
    chronicCondition8: cond8,
    geneticDisorder: geneticDisorder,
    dietaryNeeds:dietaryNeeds,
    physicalNeeds:physicalNeeds,
   /* allergie1:a1,
    allergie2:a2,
    allergie3:a3,
    allergie4:a4,
    allergie5:a5,
    allergie6:a6,*/
    allergieDetails:allerDet
        
  });
}
