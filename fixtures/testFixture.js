const base = require('@playwright/test');

exports.test = base.test.extend({

    appUrl: async ({}, use) => {

        await use(
            'https://demowebshop.tricentis.com/'
        );
    }
});

exports.expect = base.expect;