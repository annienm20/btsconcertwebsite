

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
 btsMembersdetail.forEach(function(member, index)
 {
    const member_box = document.createElement("div");
     member_box.className = "member-card animate__animated animate__zoomIn  ";
     member_box.style.animationDelay = `${index * 1}s`;
    member_box.innerHTML = `<div class = "member-box-body ">
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
const buyticket = document.querySelectorAll(".buy-ticket");

buyticket.forEach((ticket, index) => {

    ticket.addEventListener("click", function () {

        // Get the correct tour
        const selectedTour = tourlists[index];

        // Create modal
        const displayticket = document.createElement("div");
        displayticket.className = "ticket-modal";

        // STEP 1 - Ticket Details
        displayticket.innerHTML = `
            <div class="login-form-f" 
                style="
                    text-align: center;
                    position: relative;
                    background: #111;
                    padding: 30px;
                    border-radius: 12px;
                    width: 400px;
                    max-width: 90%;
                    box-sizing: border-box;
                "
            >

                <button 
                    class="close-modal-btn"
                    style="
                        position: absolute;
                        right: 15px;
                        top: 15px;
                        font-size: 26px;
                        color: #ff1340;
                        border: none;
                        background: transparent;
                        cursor: pointer;
                    "
                >
                    <i class="fa-solid fa-xmark"></i>
                </button>

                <h2 style="
                    font-size: 22px;
                    margin-bottom: 15px;
                    color: #ff1340;
                ">
                    Ticket Details
                </h2>

                <div style="text-align: left; margin-top: 15px;">

                    <p style="margin: 8px 0; color: #fff;">
                        <strong>Stadium:</strong> 
                        ${selectedTour.stadium}
                    </p>

                    <p style="margin: 8px 0; color: #fff;">
                        <strong>Location:</strong> 
                        ${selectedTour.country}
                    </p>

                    <p style="margin: 8px 0; color: #fff;">
                        <strong>Date:</strong> 
                        ${selectedTour.date}
                    </p>

                </div>

                <button 
                    class="checkout-btn"
                    style="
                        margin-top: 20px;
                        width: 100%;
                        padding: 12px;
                        background: #ff1340;
                        color: white;
                        border: 2px solid #ff1340;
                        border-radius: 8px;
                        cursor: pointer;
                        font-size: 16px;
                    "
                >
                    Proceed to Checkout
                </button>

            </div>
        `;

        // Add modal to body
        document.body.appendChild(displayticket);


        // CLOSE STEP 1
        const closeBtn = displayticket.querySelector(".close-modal-btn");

        closeBtn.addEventListener("click", () => {
            displayticket.remove();
        });


        // CHECKOUT BUTTON
        const checkoutBtn = displayticket.querySelector(".checkout-btn");

        checkoutBtn.addEventListener("mouseenter", () => {
            checkoutBtn.style.backgroundColor = "white";
            checkoutBtn.style.color = "#ff1340";
        });

        checkoutBtn.addEventListener("mouseleave", () => {
            checkoutBtn.style.backgroundColor = "#ff1340";
            checkoutBtn.style.color = "white";
        });


        // STEP 2
        checkoutBtn.addEventListener("click", function () {

            displayticket.innerHTML = `

                <div 
                    class="login-form-h"
                    style="
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        max-width: 550px;
                        width: 95%;
                        max-height: 85vh;
                        overflow-y: auto;
                        background: #111;
                        padding: 30px 25px;
                        border-radius: 12px;
                        border: 2px solid #ff1340;
                        box-shadow: 0 0 20px rgba(255,19,64,.4);
                        box-sizing: border-box;
                    "
                >

                    <button 
                        class="close-modal-btn"
                        style="
                            position: absolute;
                            right: 15px;
                            top: 15px;
                            font-size: 26px;
                            color: #ff1340;
                            border: none;
                            background: transparent;
                            cursor: pointer;
                        "
                    >
                        <i class="fa-solid fa-xmark"></i>
                    </button>


                    <h2 style="
                        font-size: 24px;
                        margin-bottom: 20px;
                        color: #ff1340;
                        text-align: center;
                    ">
                        Ticket Customisation
                    </h2>


                    <!-- TOUR INFORMATION -->

                    <div style="
                        background: #161616;
                        padding: 15px;
                        border-radius: 8px;
                        margin-bottom: 15px;
                    ">

                        <p style="color:white; margin:5px 0;">
                            <strong>Stadium:</strong> 
                            ${selectedTour.stadium}
                        </p>

                        <p style="color:white; margin:5px 0;">
                            <strong>Location:</strong> 
                            ${selectedTour.country}
                        </p>

                        <p style="color:white; margin:5px 0;">
                            <strong>Available Dates:</strong> 
                            ${selectedTour.date}
                        </p>

                    </div>


                    <form 
                        id="checkout-form-wizard"
                        style="
                            display:flex;
                            flex-direction:column;
                            gap:15px;
                        "
                    >

                        <!-- DATE -->

                        <div>

                            <label style="
                                display:block;
                                margin-bottom:5px;
                                font-weight:bold;
                                color:#fff;
                                font-size:14px;
                            ">
                                Select Tour Attendance Date
                            </label>

                            <select 
                                id="user-date"
                                required
                                style="
                                    width:100%;
                                    padding:12px;
                                    background:#1b1b1b;
                                    color:#fff;
                                    border:2px solid #333;
                                    border-radius:8px;
                                "
                            >

                                <option value="" disabled selected>
                                    Choose your show date...
                                </option>

                                <option value="Night 1">
                                    First Scheduled Show - ${selectedTour.date}
                                </option>

                                <option value="Night 2">
                                    Alternative Attendance Slot
                                </option>

                            </select>

                        </div>


                        <!-- TIER + QUANTITY -->

                        <div style="
                            display:grid;
                            grid-template-columns:1fr 1fr;
                            gap:15px;
                        ">

                            <div>

                                <label style="
                                    display:block;
                                    margin-bottom:5px;
                                    font-weight:bold;
                                    color:#fff;
                                ">
                                    Seat Category Tier
                                </label>

                                <select 
                                    id="seat-tier"
                                    required
                                    style="
                                        width:100%;
                                        padding:12px;
                                        background:#1b1b1b;
                                        color:#fff;
                                        border:2px solid #333;
                                        border-radius:8px;
                                    "
                                >

                                    <option value="General Admission">
                                        General Admission
                                    </option>

                                    <option value="VIP Standing Arena">
                                        VIP Standing Arena
                                    </option>

                                    <option value="Premium Reserved Tier">
                                        VIP Premium Soundcheck
                                    </option>

                                </select>

                            </div>


                            <div>

                                <label style="
                                    display:block;
                                    margin-bottom:5px;
                                    font-weight:bold;
                                    color:#fff;
                                ">
                                    Ticket Quantity (Max 4)
                                </label>

                                <input 
                                    type="number"
                                    id="ticket-qty"
                                    min="1"
                                    max="4"
                                    value="1"
                                    required
                                    style="
                                        width:100%;
                                        padding:12px;
                                        background:#1b1b1b;
                                        color:#fff;
                                        border:2px solid #333;
                                        border-radius:8px;
                                        box-sizing:border-box;
                                    "
                                >

                            </div>

                        </div>


                        <!-- SEAT -->

                        <div style="
                            background:#161616;
                            padding:12px;
                            border-radius:8px;
                            text-align:center;
                            border:1px dashed #444;
                        ">

                            <span style="
                                font-size:13px;
                                color:#888;
                                display:block;
                                margin-bottom:4px;
                            ">
                                Assigned Seat
                            </span>

                            <strong 
                                id="seat-numbers-display"
                                style="
                                    color:#ff1340;
                                    font-size:16px;
                                "
                            >
                                ZONE-A | ROW-07 (AUTO-ALLOCATED)
                            </strong>

                        </div>


                        <hr style="
                            border:0;
                            height:1px;
                            background:#333;
                            width:100%;
                        ">


                        <!-- PAYMENT -->

                        <div>

                            <label style="
                                display:block;
                                margin-bottom:8px;
                                font-weight:bold;
                                color:#ff1340;
                            ">
                                Payment Method
                            </label>


                            <div style="
                                display:flex;
                                gap:10px;
                                margin-bottom:10px;
                            ">

                                <label style="
                                    flex:1;
                                    background:#1b1b1b;
                                    padding:10px;
                                    border-radius:6px;
                                    color:#fff;
                                ">

                                    <input 
                                        type="radio"
                                        name="pay-method"
                                        value="Card"
                                        checked
                                    >

                                    Credit Card

                                </label>


                                <label style="
                                    flex:1;
                                    background:#1b1b1b;
                                    padding:10px;
                                    border-radius:6px;
                                    color:#fff;
                                ">

                                    <input 
                                        type="radio"
                                        name="pay-method"
                                        value="UPI/Wallet"
                                    >

                                    Mobile Wallet

                                </label>

                            </div>


                            <input 
                                type="text"
                                placeholder="16-Digit Card Number"
                                maxlength="19"
                                style="
                                    width:100%;
                                    padding:12px;
                                    background:#1b1b1b;
                                    color:#fff;
                                    border:2px solid #333;
                                    border-radius:8px;
                                    box-sizing:border-box;
                                "
                            >

                        </div>


                        <!-- FINAL BUTTON -->

                        <button 
                            type="submit"
                            class="final-book-btn"
                            style="
                                width:100%;
                                padding:14px;
                                margin-top:10px;
                                background:#ff1340;
                                color:white;
                                border:none;
                                border-radius:8px;
                                font-size:18px;
                                font-weight:bold;
                                cursor:pointer;
                            "
                        >
                            Finalize & Purchase Tickets
                        </button>

                    </form>

                </div>
            `;


            // CLOSE STEP 2

            const newCloseBtn =
                displayticket.querySelector(".close-modal-btn");

            newCloseBtn.addEventListener("click", () => {
                displayticket.remove();
            });


            // FINAL FORM

            const finalForm =
                displayticket.querySelector("#checkout-form-wizard");

            finalForm.addEventListener("submit", function (e) {

                e.preventDefault();

                const selectedDate =
                    displayticket.querySelector("#user-date").value;

                const seatTier =
                    displayticket.querySelector("#seat-tier").value;

                const quantity =
                    displayticket.querySelector("#ticket-qty").value;

                alert(
                    `Tickets Booked Successfully!\n\n` +
                    `Stadium: ${selectedTour.stadium}\n` +
                    `Location: ${selectedTour.country}\n` +
                    `Date: ${selectedDate}\n` +
                    `Tier: ${seatTier}\n` +
                    `Quantity: ${quantity}`
                );

                displayticket.remove();

            });

        });

    });

});

