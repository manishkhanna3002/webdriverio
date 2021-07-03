const fs = require("fs")
let credentials = JSON.parse(fs.readFileSync("test/testData/loginTest.json"))
const loginPage = require ("./PageObjects/loginpage")

describe ("Ecommerce application", function ()
{
    credentials.forEach(  (username, password)    => {
    it ("Login page", function ()
    {
        //Webdriverio code
        browser.url("https://webdriver.io")
        let title1 = browser.getTitle()
        console.log(title1)
        browser.pause (30000)
        expect(browser).toHaveTitleContaining("LoginPage")
        expect(browser).toHaveTextContaining("Admin")
        
        //browser.findElement("input[name='username']").setValue("rahulshettyacademy")
        //browser.pause (30000)

        //xpath, css, linktext
        // css: tagname[attribute='value'] -> input[name='username']
        //to validate css $(tagname[attribute='value'])
        //css: #id or tagname#id
        //css: .classname or tagname.classname
        //tagname is soptional and also * could be used in place of tagname
        //xpath: //tagname[@attribute='value'], //input[@type='password']
        //xpath: //*[@attribute='value']
        //to validate xpath $x(tagname[@attribute='value'])
        //while inspecting element class could have more than 1 names so the element could be identified with any classname
       
        loginPage.Login(username,password)

        console.log($(loginPage.alert.getText() +"is the text I am seeing on the screen") //getting the text of the error message on entering wrong password

        browser.waitUntil(() => loginPage.signin.getAttribute("value") === "Sign In"),{timeout: 4000, timeoutMsg: "Error message didnot appear"})
        console.log($(loginPage.alert.getText() +"is the text I am seeing on the screen") //getting the text of the error message on entering wrong password

        //$("p").getText()

        expect(loginPage.textinfo).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)")
        //browser.pause (30000)
        //For id CSS could be tagname#id (tagname is optional) i.e. in this case #username
        //For classname CSS could be tagname.classname (tagname is optional) i.e. in this case.form-control
    })
})
})