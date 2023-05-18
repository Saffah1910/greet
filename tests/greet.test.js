describe("Greet function", function () {

   

        it("if the name Amy is entered into the textbox and the language Xhosa is selected at the radio button return the message Molo, Amy", function () {
            var greetTests = Greet();
            assert.deepEqual("Molo, Amy", greetTests.selectedLanguage("xhosa", "amy"));
        });
        
        it('if the name Bob is entered into the textbox and the language English is selected at the radio button return the message Hello, Bob', function () {
            var greetTests = Greet();
            assert.equal("Hello, Bob", greetTests.selectedLanguage("english" ,"bob"));
    
        });
        it('if the name Bob is entered into the textbox and the language English is selected at the radio button return the message Hello, Bob', function () {
            var greetTests = Greet();
            assert.equal("Hello, Bob", greetTests.selectedLanguage("english" ,"bob"));
    
        });


 

});
