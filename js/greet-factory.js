function Greet(namesIn){    

    var tempStorageOfNames = namesIn || {};

    
    function selectedLanguage(lang, names) {
        var userNames = names;
                 
            if (lang === "english") {
                
                return "Hello, " + userNames.charAt(0).toUpperCase() + userNames.slice(1);
            }

            if (lang === "afrikaans") {
        
                return "Hallo, " + userNames.charAt(0).toUpperCase() + userNames.slice(1);
            }
            
            if (lang === "xhosa") {
          
                return "Molo, " + userNames.charAt(0).toUpperCase() + userNames.slice(1);
            }
           
        }

    function getNameCounter(name){
        
     if (tempStorageOfNames[name] === undefined){
        tempStorageOfNames[name] = 1
        }
    }

    function counter(){
        var newList = Object.keys(tempStorageOfNames)
        console.log(newList);
        return newList.length;
    }

    

    function getGeetedNames(){
   return tempStorageOfNames
    }

    return {
        selectedLanguage,
        getNameCounter,
        counter,
        getGeetedNames
    }

   
    
}



