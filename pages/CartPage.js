const { expect } = require('@playwright/test');
const BasePage = require('./BasePage');

class CartPage extends BasePage {

    constructor(page) {

        super(page);

        this.quantityBox =
            page.locator('.qty-input');

        this.updateCartButton =
            page.locator('input[name="updatecart"]');

        this.termsOfService =
            page.locator('#termsofservice');

        this.checkoutButton =
            page.locator('#checkout');
    }

    async updateQuantity(quantity) {

        await this.quantityBox.clear();

        await this.quantityBox.fill(quantity);

        await this.updateCartButton.click();
    }

    async verifyQuantity(quantity) {

        await expect(this.quantityBox)
            .toHaveValue(quantity);
    }

    async proceedToCheckout() {

        await this.termsOfService.check();

        await this.checkoutButton.click();
    }
}

module.exports = CartPage;