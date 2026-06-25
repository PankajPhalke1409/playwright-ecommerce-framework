const { test, expect } = require('@playwright/test');

const LoginPage =
require('../pages/LoginPage');

const users =
require('../testData/users.json');

test('Login Test', async ({ page }) => {

    await page.goto(
        'https://demowebshop.tricentis.com/'
    );

    const login =
    new LoginPage(page);

    await login.openLoginPage();

    await login.login(
        users.validUser.email,
        users.validUser.password
    );

    await expect(
        page.locator('.account')
    ).toBeVisible();
});