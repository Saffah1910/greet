function Greet(namesIn) {

    var tempStorageOfNames = namesIn || {};

    function selectedLanguage(lang, names) {
        var userNames = names;
        // var nameCapital = userNames.charAt(0).toUpperCase() + userNames.slice(1)

        if (lang === "english" && names !== "") {

            return "Hello, " + userNames.charAt(0).toUpperCase() + userNames.slice(1).toLowerCase();
        }

        if (lang === "afrikaans" && names !== "") {

            return "Hallo, " + userNames.charAt(0).toUpperCase() + userNames.slice(1).toLowerCase();
        }

        if (lang === "xhosa" && names !== "") {

            return "Molo, " + userNames.charAt(0).toUpperCase() + userNames.slice(1).toLowerCase();
        }

    }

    function getNameCounter(name) {
        name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        if (tempStorageOfNames[name] === undefined) {
            tempStorageOfNames[name] = 1
        }
    }

    function counter() {
        var newList = Object.keys(tempStorageOfNames)
        console.log(newList);
        return newList.length;
    };

    function getGeetedNames() {
        return tempStorageOfNames
    };


    function setErrors(name, checkedBtn) {

        let message = "";

        if (!name && !checkedBtn) {
            message = "Please enter a name & select a language"
        }
        else if (!name && checkedBtn) {
            message = "Please select a language"
        }
        else if (!checkedBtn && name) {
            message = "Please enter a name"
        }

        return message;
    };

    function clearRadioButtons() {
        var langChecked = document.querySelectorAll("input[type=radio]");
        for (var i = 0; i < langChecked.length; i++) {
            langChecked[i].checked = false;
        }
    };
    function alertForResetBtn() {

        return "You have succesfully reset"
    };

    function addGreen() {
        return "green"
    };

    return {
        selectedLanguage,
        getNameCounter,
        counter,
        getGeetedNames,
        setErrors,
        alertForResetBtn,
        addGreen,
        clearRadioButtons
    };
}



