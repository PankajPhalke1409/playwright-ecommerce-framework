const { expect } = require('@playwright/test');
const BasePage = require('./BasePage');

class ProductPage extends BasePage {

    constructor(page) {

        super(page);

        this.productTitle =
            page.locator('.product-name h1');

        this.addToCartButton =
            page.locator('#add-to-cart-button-31');

        this.successMessage =
            page.locator('.bar-notification.success');
    }

    async verifyProductTitle(productName) {

        await expect(this.productTitle)
            .toContainText(productName);
    }

    async addProductToCart() {

        await this.addToCartButton.click();
    }

    async verifyProductAdded() {

        await expect(this.successMessage)
            .toContainText('The product has been added');
    }
}

module.exports = ProductPage;