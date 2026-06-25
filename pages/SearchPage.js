const { expect } = require('@playwright/test');
const BasePage = require('./BasePage');

class SearchPage extends BasePage {

    constructor(page) {

        super(page);

        this.searchResultTitle =
            page.locator('.page-title');

        this.productName =
            page.locator('h2.product-title a');
    }

    async verifySearchResult(productName) {

        await expect(this.productName.first())
            .toContainText(productName);
    }

    async selectProduct(productName) {

        await this.page
            .locator(`//a[contains(text(),'${productName}')]`)
            .click();
    }
}

module.exports = SearchPage;