const expectchai = require("chai")

describe ("Ecommerce application", ()=>
{
    it ("End to End Test", ()=>
    {
        var products = ["BlackBerry","Nokia Edge"]
        browser.url("https://www.rahulshettyacademy.com/loginpageparctice/#")
        $("input[name='username']").setValue("rahulshettyacademy")
        const password = $("//input[@type='password']")
        password.setValue("learning123")
        $(signIn8tn).click
        const link = $("*=Checkout")//It will identify no matter the checkout is 1 or 2 or more as we are returning partial link text
        link.waitForExist()
        const cards = $$("div[class='card h-100']") //If you write just single $ it will return just the first item in the cart
        // And if you write $$ it will return all the items in array form
        //Also if you don't give this return type const then by default Javascript will take var keyword
        //cards.filter(card=>card.$("div h4 a").getText() === 'BlackBerry').map(blackBerryCard => blackBerryCard.$(".card-footer button").click())
        cards.filter(card=>products.includes(card.$("div h4 a").getText())).map(productCard => productCard.$(".card-footer button").click())
        //It returns an aray of 2 elements
        browser.pause(3000)
        link.click()
        productPrices = $$("//tr/td[4]/strong")
        //getText()
        //format it and convert into Integer $.65000 split it at .
        const sumofProducts = productPrices(map => productPrice=>parseInt(productPrice.getText().split(".")[1].trim()))//Ths map returns an array of 2 elements
        .reduce((acc,price6=>acc+price,0))
        console.log(sumofProducts)
        const totalValue = $("h3 strong").getText()
        const totalIntValue = parseInt(totalValue.split(".")[1].trim())
        expectchai(sumofProducts).to.equal(totalIntValue)
        $(".btn-success").click()
        $("#country").setValue("ind'")
        $(".lds-ellipsis").waitForExist({reverse:true})
        $("=India").click()
        $("input [type = 'submit']").click()
        expect($(".alert-success")).toHaveTextContaining("Success")
    })
})