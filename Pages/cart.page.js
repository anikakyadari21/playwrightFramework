class CartPage{
    constructor(page){
        this.checkoutbutton= page.getByRole("button",{name:'Checkout'})
    }
}
export default CartPage 

