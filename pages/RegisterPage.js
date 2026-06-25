const BasePage = require('./BasePage');

class RegisterPage extends BasePage {

    constructor(page) {

        super(page);

        this.registerLink =
            page.locator('.ico-register');

        this.genderMale =
            page.locator('#gender-male');

        this.firstName =
            page.locator('#FirstName');

        this.lastName =
            page.locator('#LastName');

        this.email =
            page.locator('#Email');

        this.password =
            page.locator('#Password');

        this.confirmPassword =
            page.locator('#ConfirmPassword');

        this.registerButton =
            page.locator('#register-button');
    }

    async openRegisterPage() {

        await this.registerLink.click();
    }

    async registerUser(user) {

        await this.genderMale.click();

        await this.firstName.fill(user.firstName);

        await this.lastName.fill(user.lastName);

        await this.email.fill(user.email);

        await this.password.fill(user.password);

        await this.confirmPassword.fill(user.password);

        await this.registerButton.click();
    }
}

module.exports = RegisterPage;