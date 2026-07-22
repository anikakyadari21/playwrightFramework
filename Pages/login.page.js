
class LoginPage{
    constructor(page){
        this.usernametextfield= page.getByPlaceholder("Username")
        this.userpasswordtextfield= page.getByPlaceholder("Password")
        this.loginButton= page.getByRole("button",{name:'Login'})

    }
}
export default LoginPage 