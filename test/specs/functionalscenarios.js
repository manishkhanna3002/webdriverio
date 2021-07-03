const expectchai = require("chai")

describe ("Functional testing on application", ()=>
{
    it ("Scrolling and Mouse hover", ()=>
    {
        browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
        $("#mouehover").scrollIntoView()
        //browser.pause(3000)
        $("#mousehover").moveTo()
        //browser.pause(3000)
        $("=Top").click()
        //browser.pause(3000)
        browser.url("http://only-testing-blog-blogspot.com/2014/09/selectable.html")
        $(button).doubleClick()
        console.log(browser.isAlertOpen()) //It will return true if alert is open else return false
        expectchai(browser.isAlertOpen()).to.be.true //If alert is not open this statement will return false and test will hard break here with failure status
        console.log(browser.getAlertText())
        expectchai(browser.isAlertOpen()).to.equal("'You double clicked me.. Thank You..")
        browser.acceptAlert() //Clicks on ok button present on the Alert

        //Alert is not a web page alert but a window alert, Selenium and WebdriverIO can't handle it so they
        //have written certain wrappers for the same and the wrappers as used in last 3 lines of code are isalertoprn
        //getAlertText and acceptAlert        
    })

    it ("Web tables validation", ()=>
    {
        browser.url("https://www.rahulshettyacademy.com/seleniumPractice/#/offers")
        $("tr th:nth-child(1)").click()

        const veggieLocators = $$("tr th:nth-child(1)")
        const originalveggieNames = veggielocators.map(veggie => veggie.getText())
        console.log(originalveggieNames)
        Veggies = originalveggirNames.slice()//Slice is used to take copy of Array
        console.log(veggieNames)
        //Arrays are pass by reference
        const sortVeggies = veggieNames.sort()
        console.log(sortVeggies)
        expectchai(veggieNames).to.equal(sortVeggies)
    })

    it ("Web tables filter validation", ()=>
    {
        browser.url("https://www.rahulshettyacademy.com/seleniumPractice/#/offers")
        $("input[type='search']").setValue("tomato")
        const veggielocators = $$("tr td: nth-child(1)")
        expect(veggielocators).toBeElementsArrayOfSize{eq:1}
        veggielocators.getText()
        expect(veggielocators).toHaveTextContaining("tomato")
    })
})
        