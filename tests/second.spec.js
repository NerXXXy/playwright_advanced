const {test,expect} = require('@playwright/test');

test.beforeEach(async ({page}) => {
    await page.goto('/#/login')
})

//test.use({ viewport: { height: 900 , width:600 } });

test("basic test", async ({page}) => {
    await expect(page).toHaveTitle('Conduit')
    await page.fill('input[type = "email"]' , 'nerxtest@gmail.com')
    await page.type('input[type = "password"]' , 'nerxtest')
    await page.click('form >> "Sign in"')
    const locator = page.locator('.navbar-brand');
    await expect(locator).toContainText('conduit' , {timeout:30000})
})