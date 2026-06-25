const BasePage = require('./BasePage');

class CheckoutPage extends BasePage {

    constructor(page) {

        super(page);

        this.country =
            page.locator('#BillingNewAddress_CountryId');

        this.city =
            page.locator('#BillingNewAddress_City');

        this.address1 =
            page.locator('#BillingNewAddress_Address1');

        this.zipCode =
            page.locator('#BillingNewAddress_ZipPostalCode');

        this.phoneNumber =
            page.locator('#BillingNewAddress_PhoneNumber');

        this.billingContinue =
            page.locator('//input[@onclick="Billing.save()"]');

        this.shippingContinue =
            page.locator('//input[@onclick="Shipping.save()"]');

        this.shippingMethodContinue =
            page.locator('//input[@onclick="ShippingMethod.save()"]');

        this.paymentMethodContinue =
            page.locator('//input[@onclick="PaymentMethod.save()"]');

        this.paymentInfoContinue =
            page.locator('//input[@onclick="PaymentInfo.save()"]');

        this.confirmOrderButton =
            page.locator('//input[@onclick="ConfirmOrder.save()"]');
    }

    async enterBillingAddress(data) {

        await this.country.selectOption('India');

        await this.city.fill(data.city);

        await this.address1.fill(data.address);

        await this.zipCode.fill(data.zipCode);

        await this.phoneNumber.fill(data.phone);

        await this.billingContinue.click();
    }

    async completeCheckout() {

        await this.shippingContinue.click();

        await this.shippingMethodContinue.click();

        await this.paymentMethodContinue.click();

        await this.paymentInfoContinue.click();

        await this.confirmOrderButton.click();
    }
}

module.exports = CheckoutPage;