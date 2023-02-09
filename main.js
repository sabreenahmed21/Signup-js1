let slidePage = document.querySelector(".slid-page");
let firstNext = document.querySelector(".nxt-1");
let secNext = document.querySelector(".nxt-2");
let thirdNext = document.querySelector(".nxt-3");
let firstPrv = document.querySelector(".prev-2");
let secPrv = document.querySelector(".prev-3");
let thirdPrv = document.querySelector(".prev-4");
let submit = document.querySelector(".submit");
let text = document.querySelectorAll(".step p");
let check =  document.querySelectorAll(".step .check");
let bullet = document.querySelectorAll(".step .bullet");

firstNext.addEventListener("click", function (e) {
  e.preventDefault();
  let fnameInput = document.querySelector(".f-name");
  let fnameField = document.querySelector(".f-name-field");
  let lnameInput = document.querySelector(".l-name");
  let lnameField = document.querySelector(".l-name-field");
  if (fnameInput.value === "") {
    return  fnameField.classList.add("invalid");
  }else {
    fnameField.classList.remove("invalid");
  }
  if (lnameInput.value === "") {
    return  lnameField.classList.add("invalid");
  }else {
    lnameField.classList.remove("invalid");
  }
  
  slidePage.style.marginLeft = "-25%";
  bullet[0].classList.add("active");
  check[0].classList.add("active");
});
secNext.addEventListener("click", function (e) {
  e.preventDefault();
let emailField = document.querySelector(".email-field");
let emailInput = document.querySelector(".email");
let emailPattarn = /\w+@\w+.\w+/ig;
  if (!emailInput.value.match(emailPattarn)){
      return emailField.classList.add("invalid");
    }else{
      emailField.classList.remove("invalid");
    }
  slidePage.style.marginLeft = "-50%";
  bullet[1].classList.add("active");
  check[1].classList.add("active");
});
thirdNext.addEventListener("click", function (e) {
  e.preventDefault();
  let dateInput = document.querySelector(".date");
  let dateField = document.querySelector(".date-field");
  let datePattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})/;
  let femaleInput = document.querySelector(".female-input");
  let maleInput = document.querySelector(".male-input");
  let genderField = document.querySelector(".gender-field");
  if (!dateInput.value.match(datePattern)){
    return dateField.classList.add("invalid");
  }else{
    dateField.classList.remove("invalid");
  }
  if(femaleInput.checked==false && maleInput.checked==false ){
  return genderField.classList.add("invalid");
  }else{
    genderField.classList.remove("invalid");
  }
  slidePage.style.marginLeft = "-75%";
  bullet[2].classList.add("active");
  check[2].classList.add("active");
});
submit.addEventListener("click", function () {
let userinput = document.querySelector(".user");
let userField = document.querySelector(".user-field"); 
userPattern = /\w+/ig;
if (!userinput.value.match(userPattern)){
  return userField.classList.add("invalid");
}else{
  userField.classList.remove("invalid");
}
  const passField = document.querySelector(".create-password");
  const passInput = document.querySelector(".password");
  if(passInput.value.length <= 6 ){
    return passField.classList.add("invalid");
  }
    passField.classList.remove("invalid");
  bullet[3].classList.add("active");
  check[3].classList.add("active");
  thirdPrv.classList.add("dis");
  thirdPrv.setAttribute('disabled', 'disbled');
});
firstPrv.addEventListener("click", function () {
  slidePage.style.marginLeft = "0";
  bullet[0].classList.remove("active");
  check[0].classList.remove("active");
});
secPrv.addEventListener("click", function () {
  slidePage.style.marginLeft = "-25%";
  bullet[1].classList.remove("active");
  check[1].classList.remove("active");
});
thirdPrv.addEventListener("click", function () {
  slidePage.style.marginLeft = "-50%";
  bullet[2].classList.remove("active");
  check[2].classList.remove("active");
  
});

//session storage
let fnameInput = document.querySelector(".f-name");
document.querySelector(".f-name").onblur = function () {
  window.sessionStorage.setItem("input-fname", this.value);
  fnameInput.value = sessionStorage.getItem("input-fname")
};
if(sessionStorage.getItem("input-fname")){
  fnameInput.value  = sessionStorage.getItem("input-fname");
}
let lnameInput = document.querySelector(".l-name");
document.querySelector(".l-name").onblur = function () {
window.sessionStorage.setItem("input-lname", this.value);
lnameInput.value = sessionStorage.getItem("input-lname")
};
if(sessionStorage.getItem("input-lname")){
lnameInput.value  = sessionStorage.getItem("input-lname");
}
let emailInput = document.querySelector(".email");
document.querySelector(".email").onblur = function () {
  window.sessionStorage.setItem("input-email", this.value);
  emailInput.value = sessionStorage.getItem("input-email")
};
if(sessionStorage.getItem("input-email")){
  emailInput.value  = sessionStorage.getItem("input-email");
}
let phoneInput  =  document.querySelector(".phone")
document.querySelector(".phone").onblur = function () {
  window.sessionStorage.setItem("input-phone", this.value);
  phoneInput.value = sessionStorage.getItem("input-phone")
};
if(sessionStorage.getItem("input-phone")){
  phoneInput.value  = sessionStorage.getItem("input-phone");
}
let dateInput = document.querySelector(".date");
document.querySelector(".date").onblur = function () {
  window.sessionStorage.setItem("input-date", this.value);
  dateInput.value = sessionStorage.getItem("input-date")
};
if(sessionStorage.getItem("input-date")){
  dateInput.value  = sessionStorage.getItem("input-date");
}
thirdNext.addEventListener("click", function (e){
e.preventDefault();
  const selectedRadio = document.querySelector('#radio[name="gender"]:checked');
  sessionStorage.setItem('selectedRadio', selectedRadio.value);
})
let userinput = document.querySelector(".user");
document.querySelector(".user").onblur = function () {
  window.sessionStorage.setItem("input-user", this.value);
  userinput.value = sessionStorage.getItem("input-user")
};
if(sessionStorage.getItem("input-user")){
  userinput.value  = sessionStorage.getItem("input-user");
}
const passInput = document.querySelector(".password");
document.querySelector(".password").onblur = function () {
  window.sessionStorage.setItem("input-password", this.value);
  passInput.value = sessionStorage.getItem("input-password")
};
if(sessionStorage.getItem("input-password")){
  passInput.value  = sessionStorage.getItem("input-password");
}
/******************this is created by sabreen ahmed **********/