//Globals
var stepGoalV;
var heartRateGoalV;
var donationAmountV;

function submit() {
    stepGoalV = document.getElementById("stepGoal").value;
    console.log(stepGoalV);
    heartRateGoalV = document.getElementById("heartRateGoal").value;
    console.log(heartRateGoalV);
    donationAmountV = document.getElementById("donationAmount").value;

    document.getElementById("finalDonation").innerHTML = donationAmountV;

}

var signer;
var authData;

var ref = new Firebase("https://run-or-fund.firebaseio.com");

window.onload = function () {
  document.getElementById("googleSign").addEventListener("click", gsign)};

  function gsign(){
  ref.authWithOAuthPopup("google", function(error, authData) {
  if (error) {
  console.log("Login Failed!", error);
 } else {
 console.log("Authenticated successfully with payload:", authData);
 openWin();
  }});
  };

function openWin(){
  window.open("http://runorfund.com/stats.html", "_self");
}

// document.getElementById('googleSign').addEventListener('click', ref.authWithOAuthPopup("google", function(error, authData) {
//   if (error) {
//     console.log("Login Failed!", error);
//   } else {
//     console.log("Authenticated successfully with payload:", authData);
//   }
// })
// ); //closes eventlistner
