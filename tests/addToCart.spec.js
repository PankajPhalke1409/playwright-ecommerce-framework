const { test } =
require('@playwright/test');

const HomePage =
require('../pages/HomePage');

const SearchPage =
require('../pages/SearchPage');

const ProductPage =
require('../pages/ProductPage');

const productData =
require('../testData/products.json');

test('Add Product To Cart', async ({ page }) => {

    await page.goto(
        'https://demowebshop.tricentis.com/'
    );

    const home =
    new HomePage(page);

    const search =
    new SearchPage(page);

    const product =
    new ProductPage(page);

    await home.searchProduct(
        productData.productName
    );

    await search.selectProduct(
        productData.productName
    );

    await product.addProductToCart();

    await product.verifyProductAdded();
});