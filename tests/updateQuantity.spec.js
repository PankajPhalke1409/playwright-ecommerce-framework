const { test } =
require('@playwright/test');

const HomePage =
require('../pages/HomePage');

const SearchPage =
require('../pages/SearchPage');

const ProductPage =
require('../pages/ProductPage');

const CartPage =
require('../pages/CartPage');

const productData =
require('../testData/products.json');

test('Update Cart Quantity', async ({ page }) => {

    await page.goto(
        'https://demowebshop.tricentis.com/'
    );

    const home =
    new HomePage(page);

    const search =
    new SearchPage(page);

    const product =
    new ProductPage(page);

    const cart =
    new CartPage(page);

    await home.searchProduct(
        productData.productName
    );

    await search.selectProduct(
        productData.productName
    );

    await product.addProductToCart();

    await home.openCart();

    await cart.updateQuantity(
        productData.quantity
    );

    await cart.verifyQuantity(
        productData.quantity
    );
});