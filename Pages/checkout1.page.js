
class CheckOut1Page{
    constructor(page){
        this.firstname=page.getByPlaceholder("First Name")
        this.lastanme=page.getByPlaceholder("Last Name")
        this.postalcode=page.getByPlaceholder("Zip/Postal Code")
        this.continuebutton= page.getByText("Continue")
    }
}
export default CheckOut1Page 