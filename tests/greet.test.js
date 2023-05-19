describe("Greet function", function () {
    describe("Input and errors", function () {

        it("if the name Amy is entered into the textbox and the language Xhosa is selected at the radio button return the message Molo, Amy", function () {
            var greetTests = Greet();
            assert.equal("Molo, Amy", greetTests.selectedLanguage("xhosa", "amy"));
        });

        it('if the name Bob is entered into the textbox and the language English is selected at the radio button return the message Hello, Bob', function () {
            var greetTests = Greet();
            assert.equal("Hello, Bob", greetTests.selectedLanguage("english", "bob"));

        });
        it('if the name Peter is entered into the textbox and the language Afrikaans is selected at the radio button return the message Hallo, Peter', function () {
            var greetTests = Greet();
            assert.equal("Hallo, Peter", greetTests.selectedLanguage("afrikaans", "peter"));

        });
        it('if no name and no languge is selected return message : Please enter a name & select a language', function () {
            var greetTests = Greet();
            assert.equal("Please enter a name & select a language", greetTests.setErrors("", ""));
        });
        it("if no name is entered but only a language is selected return message : Please enter a name", function () {
            var greetTests = Greet();
            assert.equal("Please enter a name", greetTests.setErrors(!"", ""));
        });
        it("if no language is selected but name is entered return the message : Please select a language", function () {
            var greetTests = Greet();
            assert.equal("Please select a language", greetTests.setErrors("", !""));
        });
    });
    

});
