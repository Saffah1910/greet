let textAreaElem = document.querySelector(".textArea");
let radioBtnElem = document.querySelector(".radioBtn");
let greetBtnElem = document.querySelector(".greetBtn");
let numberCounterElem = document.querySelector(".numberCounter");
let nameElem = document.querySelector(".name");
let resetBtnElem = document.querySelector(".resetBtn");
let messageElem = document.querySelector(".message");
let alertHideElem = document.querySelector(".alert-hide");
let errorMsg = document.querySelector(".msg");

// reading the string from localStorage
const storedNamesString = localStorage.getItem('names');
// convert the store name string into an object...
const names = JSON.parse(storedNamesString);
// send the already greeted names into my factory function
var greetTheUser = Greet(names);

// load the counter initially
numberCounterElem.innerHTML = greetTheUser.counter()

function totalGreetings() {

    var checkedBtn = document.querySelector("input[name='radioLanguage']:checked");

    if (checkedBtn) {

        var langageType = checkedBtn.value
        var name = textAreaElem.value

        nameElem.innerText = greetTheUser.selectedLanguage(langageType, name)

        greetTheUser.getNameCounter(name);
        
        localStorage.setItem('names', JSON.stringify(greetTheUser.getGeetedNames()));

        
        numberCounterElem.innerHTML = greetTheUser.counter();

    //    textAreaElem.foreach(textAreaElem => textAreaElem.value="");

    }

    else{
    
            if(name ==="" && !checkedBtn){
                message = "Please enter name and select the radio button"
              }
              if(name !=="" && checkedBtn){
                message ="Please enter name"
              }
              if(!checkedBtn && name !==""){
                message="Please select language"
              }
            }
            // errorMsg.add(".alert");


        messageElem.innerHTML = message;

        //   myTimeout = setTimeout(messageElem, 5000);
    
}



greetBtnElem.addEventListener("click", totalGreetings);




resetBtnElem.addEventListener("click", function () {
    // alert("are you sure you want to reset");
    location.reload();
    localStorage.clear(); 
});










