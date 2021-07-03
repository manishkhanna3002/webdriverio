
describe ("Ecommerce application", function ()
{
    this.retries(2)
    it ("Login fail page", function ()
    {
        //this.retries(2)
        //Webdriverio code
        browser.url("https://www.rahulshettyacademy.com/loginpageparctice/#")
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
        $("input[name='username']").setValue("rahulshettyacademy")
        $("#username").setValue("secondCSS")
        const password = $("//input[@type='password']")
        password.setValue("learning123")
        $(signIn8tn).click
        

        browser.waitUntil(() => $($signIn8tn).getAttribute("value") === "Sign In"),{timeout: 4000, timeoutMsg: "Error message didnot appear"})
        console.log($(".alert-danger").getText() +"is the text I am seeing on the screen") //getting the text of the error message on entering wrong password

        $("p").getText()

        expect($("p")).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)")
        //browser.pause (30000)
        //For id CSS could be tagname#id (tagname is optional) i.e. in this case #username
        //For classname CSS could be tagname.classname (tagname is optional) i.e. in this case.form-control
    })

    it ("Login success page", function ()
        browser.url("https://www.rahulshettyacademy.com/loginpageparctice/#")
        $("input[name='username']").setValue("rahulshettyacademy")
        const password = $("//input[@type='password']")
        password.setValue("learning123")
        $(signIn8tn).click
        expect(browser).toHaveTitle("Protocommerce")
        //$("=checkout (0)")
        link.waitForExist
        const link = $("*=Checkout")
        expect(browser).toHaveUrlContaining("shop")
        
        

    })
})