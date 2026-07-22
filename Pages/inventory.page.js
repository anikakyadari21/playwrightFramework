class InventoryPage{
    constructor(page){
        this.firstitem= page.locator("//div[text()='Sauce Labs Backpack']/following::button[@id='add-to-cart-sauce-labs-backpack']")
        this.seconditem= page.locator("//div[text()='Sauce Labs Bike Light']/following::button[@id='add-to-cart-sauce-labs-bike-light']")
        this.thirditem= page.locator("//div[text()='Sauce Labs Bolt T-Shirt']/following::button[@id='add-to-cart-sauce-labs-bolt-t-shirt']")
        this.carticon= page.locator("//a[@class='shopping_cart_link']")
    }
}
export default InventoryPage 