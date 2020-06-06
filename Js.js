/* This is for the PhUp button. */
var PgUpButton = document.getElementById("PgUp");
window.onscroll = function() {
  ScrollFunction();
};
function ScrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    PgUpButton.style.display = "block";
  } else {
    Button.style.display = "none";
  }
}
function TopFuction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var MyIndex = 0;
carousel();

function carousel() {
var i;
var x = document.getElementsByClassName("Epl");
var y = document.getElementsByClassName("Caf");
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";
  y[i].style.display = "none";
}
MyIndex++;
if (MyIndex > x.length) {
  MyIndex = 1;
}
x[MyIndex-1].style.display = "block";
y[MyIndex-1].style.display = "block";
setTimeout(carousel, 1700);
}

/* For password confirming. */
function ConfirmPw(){
  var pwd=Reg.Password.value;
  var cnfpwd=Reg.ConfirmPassword.value;

  if(pwd!=cnfpwd){
    alert("Passwords does not match.");
    Reg.ConfirmPassword.focus();
    return false;
  }
    alert("thanks for joining us. I wish I meet your expectations.");
    return true;
  }
  
/* Buttons */
function SignInFunc(){
  var news=NewsletterForm.NewsSignIn.value;
  if(news!=""){
    alert("Welcome sur, we are honored to be one of us.");
  }
}

/* For Opinion Form. */
function SendMsg(){
  var op=OpinionForm.Message.value;
  if(op!=""){
    alert("Thanks for your opinion, we appreciate that :)");
  }
}

function Reset() {
  alert("Everything is reset, refill the form :)");
}