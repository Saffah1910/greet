let textAreaElem = document.querySelector(".textArea");
let radioBtnElem = document.querySelector(".radioBtn");
let greetBtnElem = document.querySelector(".greetBtn");
let numberCounterElem = document.querySelector(".numberCounter");
//where the greeting will be displayed
let nameElem = document.querySelector(".name");
let resetBtnElem = document.querySelector(".resetBtn");
let messageElem = document.querySelector(".message");
let resetMessageElem = document.querySelector(".resetMessage");


// reading the string from localStorage
const storedNamesString = localStorage.getItem('names');
// convert the store name string into an object...
const names = JSON.parse(storedNamesString);
// send the already greeted names into my factory function
var greetTheUser = Greet(names);

// load the counter initially
numberCounterElem.innerHTML = greetTheUser.counter();

myTimer = setTimeout(greetTheUser.setErrors(), 5000);
clearTimeout(myTimer);



function totalGreetings() {

    var checkedBtn = document.querySelector("input[name='radioLanguage']:checked");

    // if (checkedBtn) {

    var langageType = null;
    // ensure a language was selected and if so use the message...
    if (checkedBtn) {
        langageType = checkedBtn.value
    }


    var name = textAreaElem.value

    const errorMessage = greetTheUser.setErrors(name, langageType);

    greetTheUser.getNameCounter(name);

    if (errorMessage) {
        
        messageElem.innerHTML = greetTheUser.setErrors(langageType, name);
        messageElem.style.display = "block";
        setTimeout(function(){
            messageElem.style.display = "none";
        },2000)
    }
    else {

        nameElem.innerText = greetTheUser.selectedLanguage(langageType, name);

        localStorage.setItem('names', JSON.stringify(greetTheUser.getGeetedNames()));

        numberCounterElem.innerHTML = greetTheUser.counter();

        textAreaElem.value = "";

        greetTheUser.clearRadio();
    }

}
greetBtnElem.addEventListener("click", totalGreetings);

resetBtnElem.addEventListener("click", function () {
  
    // resetMessageElem.style.display = "block";

    setTimeout(function(){
        // resetMessageElem.style.display = "none";
        location.reload();
        localStorage.clear();
    },1000)
    resetMessageElem.innerHTML= greetTheUser.alertForResetBtn();
    
    
        // location.reload();
        // localStorage.clear();
    });










