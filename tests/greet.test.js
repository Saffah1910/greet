describe("Greet function", function () {

    describe("set name and language", function () {

        it("if the name Amy is entered into the textbox and the language xhosa is selected at the radio button return the message Molo, Amy", function () {
            var greetTests = Greet();
            const person = [
                {enteredName: "Amy", language: "xhosa"}
            ];
            
            greetTests.selectedLanguage(person);
            assert.deepEqual("Molo, Amy", greetTests.selectedLanguage(lang, names));
        });
    });

});
