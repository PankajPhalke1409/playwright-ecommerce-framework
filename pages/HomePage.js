const BasePage = require('./BasePage');

class HomePage extends BasePage {

    constructor(page) {

        super(page);

        this.searchBox =
            page.locator('#small-searchterms');

        this.searchButton =
            page.locator('input[value="Search"]');

        this.shoppingCart =
            page.locator('.ico-cart');
    }

    async searchProduct(productName) {

        await this.searchBox.fill(productName);

        await this.searchButton.click();
    }

    async openCart() {

        await this.shoppingCart.click();
    }
}

module.exports = HomePage;