const loginfrom = document.querySelector(".login-icon");
const darkmode = document.querySelector(".sun-icon");
const wholecontent = document.body;
const barsbtn = document.querySelector(".bars");
const NavListItems =  document.querySelector(".nav-lists-items");

darkmode.addEventListener("click" , function() {
    darkmode.classList.toggle("darkmodeanimation");
 
    wholecontent.classList.toggle("DarkModeOn");
     if (wholecontent.classList.contains("DarkModeOn")) {
        darkmode.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    } else {
        darkmode.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    }
});
barsbtn.addEventListener("click" , function() {
NavListItems.classList.toggle("nav-amination");
});
//form//
const SignInbtn = document.querySelector(".login-content");
const SignInForm =  document.querySelector(".form-content");
const CloseBtn = document.querySelector(".closebtn");
const SubmitBtn = document.querySelector(".submit-btn");
const SignUpForm = document.querySelector(".signup-content");
const CloseBtn2 = document.querySelector(".closebtn-2");
const opensignup =  document.querySelector(".OpenSignUp");
const opensignin =  document.querySelector(".OpenSignIn");

opensignin.addEventListener("click" , () => {
SignUpForm.style.display = "none";
    SignInForm.style.display = "block";
});
opensignup.addEventListener("click" , () => {
SignInForm.style.display = "none";
    SignUpForm.style.display = "block";
});
SignInbtn.addEventListener("click" , () => {
SignInForm.style.display = "block";
});
CloseBtn.addEventListener("click", () => {
SignInForm.style.display = "none";
});
CloseBtn2.addEventListener("click", () => {
SignUpForm.style.display = "none";
});
SubmitBtn.addEventListener("click", function() {
const welcome = document.createElement("div");
welcome.innerHTML = `<div class = "welcome-body">
 <button class="closebtn-1"><i class="fa-solid fa-xmark"></i></button>
<div class = "welcometext" style = "color : #ff1340;">welcome Army ,  
let join tour with us </div>
</div>`;
document.body.append(welcome);
SignInForm.style.display = "none";
welcome.style.display = "block";
const closeWelcome = welcome.querySelector(".closebtn-1");
closeWelcome.addEventListener("click", () => {
welcome.style.display = "none";
});
});
