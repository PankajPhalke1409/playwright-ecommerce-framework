const { test } =
require('@playwright/test');

const HomePage =
require('../pages/HomePage');

const SearchPage =
require('../pages/SearchPage');

const productData =
require('../testData/products.json');

test('Search Product', async ({ page }) => {

    await page.goto(
        'https://demowebshop.tricentis.com/'
    );

    const home =
    new HomePage(page);

    const search =
    new SearchPage(page);

    await home.searchProduct(
        productData.productName
    );

    await search.verifySearchResult(
        productData.productName
    );
});