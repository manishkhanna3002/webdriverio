const expectchai = require("chai")

describe ("Ecommerce application", ()=>
{
    it ("UI Controls", ()=>
    {
        browser.url("https://www.rahulshettyacademy.com/loginpageparctice/#")
        $("input[name='username']").setValue("rahulshettyacademy")
        const password = $("//input[@type='password']")
        password.setValue("learning123")
        const radioButtons = $$(".customradio") //When on e$ symbol is used it returns first matching element which in this case is Admin
                                                //If both elements are required to be returned then $$ are used. Selenium/WebdriverIO
                                                //scans for matching elements from top right
        userDropdown = radioButtons[1]
        userDropdown.$(".radiotextsty").click() //In ocha if you give x in front of any row it would be skipped
        //browser.pause(3000)
        const modal = $(".modal-body")
        modal.waitForDisplayed()
        $("#cancelBtn").click()
        console.log(userDropdown.$(".radiotextsty").isSelected())
        userDropdown.$(".radiotextsty").click()
        modal.waitForDisplayed()
        $("#okaylBtn").click()
        radioButtons[0].$(".radiotextsty").click()
        //step which will tell that modal is not displayed
        expect(modal).not.toBeDisplayed//We are expecting that modal is not displayed. This is negative assertion using Mocha framework
        const dropdown = $("select.form-control")
        //You can select dropdown values based on selectvyattribute, selectbyindex and selectbyvisibletext
        dropdown.selectByAttribute("value","teach")
        //browser.pause(2000)
        dropdown.selectByVisibleText("Consultant")
        //browser.pause(2000)
        dropdown.selectByIndex(0)
        //browser.pause(2000)
        expectchai(dropdown.getValue()).to.equal("stud")
        expectchai(dropdown.getValue()).to.equal("teach")
    })
    it ("Dynamic UI Controls", ()=>
    {
        browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
        $("#autocomplete").setValue("ind")
        browser.pause(3000)
        let items = $$("class='ui-menu-item'] div")
        //for (var i=0;i<items.length;i++)
        //{
        //    console.log(items[i].getText())
        //}

       const desiredlocator =  items.filter(item=> item.getText() === "India")
       desiredlocator[0].click()
       browser.pause(3000)
    })

    it ("Checkboxes Identification", ()=>
    {
        browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
        const element = $$(input[type='checkboxes'])
        element[1].click()
        console.log(element[1].isSelected())
        //Returns true if selected else returns false
        console.log(element[2].isSelected())
        browser.saveScreenshot("screenshot.png")//Whatever is there at a line immediately above this will be captured using this screenshot mechanism
    })
})