const { test, expect } =
require('@playwright/test');

test(
'Validate Product API',
async ({ request }) => {

    const response =
    await request.get(
    'https://fakestoreapi.com/products'
    );

    expect(
    response.status()
    ).toBe(200);

    const body =
    await response.json();

    console.log(body);

    expect(
    body.length
    ).toBeGreaterThan(0);
});