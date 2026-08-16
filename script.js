

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
const galleryImagesDivs = document.querySelectorAll(".gallery-images div");
const galleryImages = document.querySelector(".gallery-images");

galleryImagesDivs.forEach((div) => {
  div.addEventListener("click", function (e) {
    // Prevent triggering if close button is clicked
    if (e.target.classList.contains("close-btn")) return;

    // 1. Mark parent container and activate current div
    galleryImages.classList.add("has-active");
    
    galleryImagesDivs.forEach((item) => item.classList.remove("active"));
    const activeDiv = e.currentTarget;
    activeDiv.classList.add("active");

    // 2. Add close button if not present
    if (!activeDiv.querySelector(".close-btn")) {
      const closeBtn = document.createElement("button");
      closeBtn.className = "close-btn";
      closeBtn.innerHTML = "&times;";

      // 3. Reset gallery when close button is clicked
      closeBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        
        galleryImages.classList.remove("has-active");
        activeDiv.classList.remove("active");
        closeBtn.remove();
      });

      activeDiv.appendChild(closeBtn);
    }
  });
});