import {test} from "@playwright/test"

import LoginPage from "../../Pages/login.page"
import InventoryPage from "../../Pages/inventory.page"
import CartPage from "../../Pages/cart.page"
import CheckOut1Page from "../../Pages/checkout1.page"
import CheckOut2Page from "../../Pages/checkout2.page"
import CheckoutCompletePage from "../../Pages/checkoutcomplete.page"
import data from "../../testData/e2e.json"

import path from "node:path"
import fs from "fs"

test('Login feature POM and DDT', async ({page}) => { 
    let loginpage= new LoginPage(page)
    let inventorypage = new InventoryPage(page)
    let cartpage = new CartPage(page)
    let checkout1page= new CheckOut1Page(page)
    let checkout2page = new CheckOut2Page(page)
    let completecheck = new CheckoutCompletePage(page)

    await page.goto(data.url)

    await loginpage.usernametextfield.fill(data.username)
    await loginpage.userpasswordtextfield.fill(data.password)
    await loginpage.loginButton.click()

    await inventorypage.firstitem.click()
    await inventorypage.seconditem.click()
    await inventorypage.thirditem.click()

    await inventorypage.carticon.click()

    await cartpage.checkoutbutton.click()
    await checkout1page.firstname.fill(data.firstname)
    await checkout1page.lastanme.fill(data.lastname)
    await checkout1page.postalcode.fill(data.postalcode)
    await checkout1page.continuebutton.click()

    await checkout2page.finishbutton.click()

    let [file]= await Promise.all([
       page.waitForEvent('download'),
       completecheck.generatepdf.click()
    ])
    let filename = file.suggestedFilename()
    let downloadFolder1= path.join(__dirname,"../../downloadFiles")
    await file.saveAs(path.join(downloadFolder1,filename))
    await completecheck.backtohome.click()
}) 


