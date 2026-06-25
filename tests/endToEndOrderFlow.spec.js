const { test } =
require('@playwright/test');

const LoginPage =
require('../pages/LoginPage');

const HomePage =
require('../pages/HomePage');

const SearchPage =
require('../pages/SearchPage');

const ProductPage =
require('../pages/ProductPage');

const CartPage =
require('../pages/CartPage');

const CheckoutPage =
require('../pages/CheckoutPage');

const OrderConfirmationPage =
require('../pages/OrderConfirmationPage');

const users =
require('../testData/users.json');

const productData =
require('../testData/products.json');

test('End To End Order Flow', async ({ page }) => {

    await page.goto(
        'https://demowebshop.tricentis.com/'
    );

    const login =
    new LoginPage(page);

    const home =
    new HomePage(page);

    const search =
    new SearchPage(page);

    const product =
    new ProductPage(page);

    const cart =
    new CartPage(page);

    const checkout =
    new CheckoutPage(page);

    const order =
    new OrderConfirmationPage(page);

    await login.openLoginPage();

    await login.login(
        users.validUser.email,
        users.validUser.password
    );

    await home.searchProduct(
        productData.productName
    );

    await search.selectProduct(
        productData.productName
    );

    await product.addProductToCart();

    await home.openCart();

    await cart.proceedToCheckout();

    await checkout.enterBillingAddress(
        productData.billingAddress
    );

    await checkout.completeCheckout();

    await order.verifyOrderPlaced();

    const orderNo =
    await order.getOrderNumber();

    console.log(
        'Order Number : ',
        orderNo
    );
});