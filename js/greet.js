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

function totalGreetings() {

    var checkedBtn = document.querySelector("input[name='radioLanguage']:checked");
    var langageType = null;
    // ensure a language was selected and if so use the message...
    if (checkedBtn) {
        langageType = checkedBtn.value
    }
    var name = textAreaElem.value

    const errorMessage = greetTheUser.setErrors(name, langageType);

    greetTheUser.getNameCounter(name);

    if (errorMessage) {

        nameElem.innerHTML = greetTheUser.setErrors(langageType, name);
        nameElem.style.display = "block";
        setTimeout(function () {
            nameElem.style.display = "none";
        }, 2000);
        nameElem.classList.add(greetTheUser.addRed());
    }
    else if (greetTheUser.validData(textAreaElem.value) == false) {
       nameElem.innerHTML = greetTheUser.invalidMessage(name);
       nameElem.classList.add(greetTheUser.addRed());
       nameElem.style.display = "block";
       setTimeout(function(){
        nameElem.style.display= "none"
       },2000);
       textAreaElem.value = "";

       greetTheUser.clearRadioButtons();
    }

    else {
        nameElem.classList.remove(greetTheUser.addRed());
        nameElem.innerText = greetTheUser.selectedLanguage(langageType, name);
        nameElem.style.display = "block";
        setTimeout(function () {
            nameElem.style.display = "none";
        }, 10000);

        localStorage.setItem('names', JSON.stringify(greetTheUser.getGeetedNames()));
        numberCounterElem.innerHTML = greetTheUser.counter();
        textAreaElem.value = "";
        greetTheUser.clearRadioButtons();
    }
}
greetBtnElem.addEventListener("click", totalGreetings);

resetBtnElem.addEventListener("click", function () {
    
        numberCounterElem.innerHTML = 0;
        setTimeout(function () {
            location.reload();
            localStorage.clear();
         }, 3000);
    
        messageElem.innerHTML = greetTheUser.alertForResetBtn();
        messageElem.classList.add(greetTheUser.addGreen());
  

 
});










