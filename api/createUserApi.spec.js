const { test, expect } =
require('@playwright/test');

test(
'Create User API',
async ({ request }) => {

    const response =
    await request.post(
    'https://reqres.in/api/users',
    {
        data: {

            name: 'Pankaj',

            job: 'QA Engineer'
        }
    });

    expect(
    response.status()
    ).toBe(201);

    const body =
    await response.json();

    console.log(body);
});