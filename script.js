

const loginfrom = document.querySelector(".login-icon");
const darkmode = document.querySelector(".sun-icon");

const barsbtn = document.querySelector(".bars");
const NavListItems =  document.querySelector(".nav-lists-items");

darkmode.addEventListener("click" , function() {
    darkmode.classList.toggle("darkmodeanimation");
 const wholecontent = document.body;
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

//menmber-details
const btsMembersdetail = [
  {
    name: "RM",
    age: 32,
    position: "Main Rapper",
    image: "image/rm.jpg"
  },
  {
    name: "Jin",
    age: 33,
    position: "Vocals",
    image: "image/jin.jpg"
  },
  {
    name: "SUGA",
    age: 33,
     position: "Lead Rapper",
    image: "image/suga.jpg"
  },
  {
    name: "J-Hope",
    age: 32,
    position: "Rapper",
    image: "image/j-hope.jpg"
  },
  {
    name: "Jimin",
    age: 31,
    position: "Vocalist",
    image: "image/jimin.jpg"
  },
  {
    name: "V",
    age: 30,
    position: "Vocals",
    image: "image/v.jpg"
  },
  {
    name: "Jungkook",
    age: 28,
    position: "Vocals",
    image: "image/jungkook.jpg"
  }
];

const btsMember = document.querySelector(".bts-members");
const i = 0;
 btsMembersdetail.forEach(function(member)
 {
    const member_box = document.createElement("div");
   
    member_box.innerHTML = `<div class = "member-box-body">
    <div class = "bts-image">
    <img src ="${member.image}"></div>
    <div class = "bts-details">
    <div class= "bts-name">${member.name} (${member.position})</div>
    <div class = "bts-age">${member.age}</div>
    </div>
    </div>`;
    btsMember.appendChild(member_box);
});
// JavaScript
// JavaScript Gallery Fix
const galleryImagesDivs = document.querySelectorAll(".gallery-images div");
const galleryImages = document.querySelector(".gallery-images");

galleryImagesDivs.forEach(galleryimg => {
  galleryimg.addEventListener("click" , function(event) {
    const clickedDiv = event.currentTarget;
    
    // 1. Toggle the layout animation class on the parent element wrapper
    galleryImages.classList.toggle("galleryiamgeanimation");
    
    // 2. Check if the parent is currently in full-width mode or normal mode
    const isFullWidthMode = galleryImages.classList.contains("galleryiamgeanimation");
    
    // 3. Loop through to adjust visibility based on the state check
    galleryImagesDivs.forEach(div => {
      if (isFullWidthMode) {
        // --- WE ARE OPENING THE IMAGE ---
        if (div === clickedDiv) {
          div.style.display = "block";
          div.style.width = "100%";
          div.style.height = "100%";
        } else {
          div.style.display = "none";
        }
      } else {
        // --- WE ARE CLOSING THE IMAGE (Resetting back to normal 3-columns) ---
        // Clean out all temporary JavaScript inline styles completely
        div.style.display = "";
        div.style.width = "";
        div.style.height = "";
      }
    });
  });
});

const tourlistdetails = document.querySelector(".tour-list-details");
const tourlists = [
{
  country : "Goyang, South Korea",
  date : "April (9,11,12), 2026",
  stadium : "Goyang Stadium",

},
{
  country : "Tokyo, Japan",
  date : "April (17,18), 2026",
  stadium : "Tokyo Dome",
 
},
{
  country : "Tampa, United States",
  date : "April (25,26,28), 2026",
  stadium : "Raymond James Stadium ",

},
{
  country : "El Paso, United States ",
  date : "May (2,3), 2026",
  stadium : "Sun Bowl ",

},
{
  country : "Mexico City, Mexico ",
  date : "May (7,9,10), 2026",
  stadium : "Estadio GNP Seguros",
 
},
{
  country : "Stanford, United States",
  date : "May (16,17,19), 2026",
  stadium : "Stanford Stadium",
 
},
{
  country : "Las Vegas, United States",
  date : "May (23,24,27,28), 2026",
  stadium : "Allegiant Stadium",
 
},
{
  country : "Busan, South Korea",
  date : "June (12,13), 2026",
  stadium : "Busan Asiad Main Stadium",
 
},
{
  country : "Madrid, Spain",
  date : "June (26,27), 2026",
  stadium : "Riyadh Air Metropolitano",
 
},
{
  country : "Brussels, Belgium",
  date : "July (1,2), 2026",
  stadium : " King Baudouin Stadium",
 
}


];


tourlists.forEach(content => {
   const contentcreatediv = document.createElement("div");
contentcreatediv.innerHTML = `<div class = "tour-contents">
<div class = "left-content">
<div class = "stadium-name">${content.stadium}</div>
<div class = "country-name">${content.country}</div>
<div class = "date">${content.date}</div>
</div>
<div class = "right-content">
<button class = "buy-ticket">buy ticket</button>
</div>
</div>`;
tourlistdetails.appendChild(contentcreatediv)});





























