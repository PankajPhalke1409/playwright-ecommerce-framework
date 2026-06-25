const { expect } = require('@playwright/test');
const BasePage = require('./BasePage');

class OrderConfirmationPage extends BasePage {

    constructor(page) {

        super(page);

        this.orderSuccessMessage =
            page.locator('.title');

        this.orderNumber =
            page.locator('.details');
    }

    async verifyOrderPlaced() {

        await expect(this.orderSuccessMessage)
            .toContainText('Your order has been successfully processed!');
    }

    async getOrderNumber() {

        return await this.orderNumber.textContent();
    }
}

module.exports = OrderConfirmationPage;