
class CheckoutCompletePage{
    constructor(page){
        this.backtohome= page.getByText("Back Home")
        this.generatepdf= page.getByText("Generate PDF order")
    }
}
export default CheckoutCompletePage 

