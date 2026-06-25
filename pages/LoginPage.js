const BasePage = require('./BasePage');

class LoginPage extends BasePage {

    constructor(page) {

        super(page);

        this.loginLink =
            page.locator('.ico-login');

        this.email =
            page.locator('#Email');

        this.password =
            page.locator('#Password');

        this.loginButton =
            page.locator('input.login-button');
    }

    async openLoginPage() {

        await this.loginLink.click();
    }

    async login(email, password) {

        await this.email.fill(email);

        await this.password.fill(password);

        await this.loginButton.click();
    }
}

module.exports = LoginPage;