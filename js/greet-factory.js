function Greet(namesIn) {

    var tempStorageOfNames = namesIn || {};
 

    var message = "";


    function selectedLanguage(lang, names) {
        // var userNames = names.toLowerCase();
        var nameCapital = names.charAt(0).toUpperCase() + names.slice(1)

        if (lang === "english" && names !== "") {

            return "Hello, " + nameCapital;
        }

        if (lang === "afrikaans" && names !== "") {

            return "Hallo, " + nameCapital;
        }

        if (lang === "xhosa" && names !== "") {

            return "Molo, " + nameCapital;
        }

    }

    function getNameCounter(name) {

        if (tempStorageOfNames[name] === undefined) {
            tempStorageOfNames[name] = 1
        }
    }

    function counter() {
        var newList = Object.keys(tempStorageOfNames)
        console.log(newList);
        return newList.length;
    }



    function getGeetedNames() {
        return tempStorageOfNames
    }


    function setErrors(name , checkedBtn) {

        let message = "";

        if (!name && !checkedBtn) {
           message = "Please enter name & select language"
        }
        else if (!name && checkedBtn) {
            message = "Please select language"
        }
        else if (!checkedBtn && name) {
            message = "Please enter name"
        }

        return message;
    }
   
    
    function clearRadio() {
        let radio = radioBtnElem;
        radio.checked = false;
        
     }

    //  function alertForResetBtn(){
        
    //     confirm("are you sure you want to reset?")
    //  }

    return {
        selectedLanguage,
        getNameCounter,
        counter,
        getGeetedNames,
        setErrors,
        clearRadio,
        // getErrors
        // alertForResetBtn
    }



}



