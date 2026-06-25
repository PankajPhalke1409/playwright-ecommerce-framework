const { test, expect } = require('@playwright/test');

const RegisterPage =
require('../pages/RegisterPage');

const users =
require('../testData/users.json');

test('User Registration', async ({ page }) => {

    await page.goto(
        'https://demowebshop.tricentis.com/'
    );

    const register =
    new RegisterPage(page);

    await register.openRegisterPage();

    await register.registerUser(
        users.newUser
    );

    await expect(
        page.locator('.result')
    ).toContainText(
        'Your registration completed'
    );
});