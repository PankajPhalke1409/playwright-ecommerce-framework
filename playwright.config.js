const { defineConfig, devices } =
require('@playwright/test');

module.exports = defineConfig({

    testDir: './tests',

    timeout: 60000,

    retries: 2,

    workers: 4,

    fullyParallel: true,

    globalSetup:
    require.resolve(
        './hooks/globalSetup'
    ),

    globalTeardown:
    require.resolve(
        './hooks/globalTeardown'
    ),

    reporter: [

        ['html'],

        ['list']
    ],

    use: {

        headless: true,

        screenshot:
        'only-on-failure',

        video:
        'retain-on-failure',

        trace:
        'retain-on-failure'
    },

    projects: [

        {

            name: 'chromium',

            use: {
                ...devices['Desktop Chrome']
            }
        },

        {

            name: 'firefox',

            use: {
                ...devices['Desktop Firefox']
            }
        }
    ]
});