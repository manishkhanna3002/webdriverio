describe ("Windows and Frames miscellaneous", ()=>
{
    it ("Parent and child windows switch", ()=>
    {
        browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
        $("[onclick*='openWindow']").click()//* means return any value containing text openWindow
        var handles = browser.getWindowHandles()//Windowhandles means return id related to the opened windows
        //At 0th index parent window will be there and at 1st index child window will be there
        browser.switchToWindow(handles[1])
        console.log(browser.getTitle())
        browser.maximizeWindow()//By default window would be opened in minimized mode
        browser.closeWindow()
        browser.switchToWindow(handles[0])
        console.log(browser.getTitle())
        browser.newWindow("https://www.rahulshettyacademy.com/#/index")
        //If you want to open ny newwindow in the middle of the test you can use newWindow
        const title = browser.getTitle()
        browser.switchWindow("https://www.rahulshettyacademy.com/AutomationPractice/")
        $("#name").setValue(title)
        browser.pause(3000)
        browser.switchWindow(title)
        console.log(browser.getUrl())
    })

    it ("Frames switch", ()=>
    {
        browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
        $("mousehover").scrollIntoView()
        console.log($$("a").length) //$$ will return an array of all the locators/length or numbers of links count
        browser.SwitchToFrame($("[id = 'courses-iframe']"))
        $("=courses").getTagName()
        console.log($$("a").length)
        browser.SwitchToFrame(null)
        console.log($$("a").length)
    })
})