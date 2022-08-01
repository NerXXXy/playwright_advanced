// to run tests write "npx playwright test" in terminal


const {test , expect} = require('@playwright/test');

test.beforeAll(async () =>{
    console.log('---beforeAll')
})

test.beforeEach(async ({page}) => {
    console.log('---beforeEach')
   await page.goto('https://react-redux.realworld.io/#/login')
})

test.afterEach(async ({page}) =>{
    console.log('---afterEach')
})

test.afterAll(async () => {
    console.log('---afterAll')
})

test("basic test", async ({page}) => {

    await expect(page).toHaveTitle('Conduit')

    await page.fill('input[type = "email"]' , 'nerxtest@gmail.com')
    await page.type('input[type = "password"]' , 'nerxtest')
    await page.click('form >> "Sign in"')
    const locator = page.locator('.navbar-brand');
    await expect(locator).toContainText('conduit' , {timeout:30000})
    console.log('---test1---')

})

test("login test", async ({page}) => {

    await expect(page).toHaveTitle('Conduit')

    await page.fill('input[type = "email"]' , 'nerxtest@gmail.com')
    await page.type('input[type = "password"]' , 'nerxtest')
    await page.click('form >> "Sign in"')
    const locator = page.locator('.navbar-brand');
    await expect(locator).toContainText('conduit' , {timeout:30000})
    console.log('---test2---')

})


// test.only("login test only", async ({page}) => {
//
//     await expect(page).toHaveTitle('Conduit')
//
//     await page.fill('input[type = "email"]' , 'nerxtest@gmail.com')
//     await page.type('input[type = "password"]' , 'nerxtest')
//     await page.click('form >> "Sign in"')
//     const locator = page.locator('.navbar-brand');
//     await expect(locator).toContainText('conduit' , {timeout:30000})
//     console.log('---test2---')
//
// })


// How to skip test version 1


// test.skip("login test skip", async ({page}) => {
//
//     await expect(page).toHaveTitle('Conduit')
//
//     await page.fill('input[type = "email"]' , 'nerxtest@gmail.com')
//     await page.type('input[type = "password"]' , 'nerxtest')
//     await page.click('form >> "Sign in"')
//     const locator = page.locator('.navbar-brand');
//     await expect(locator).toContainText('conduit' , {timeout:30000})
//     console.log('---test2---')
//
// })



// How to skip test version 2


// test("login test skip 2", async ({page,browserName}) => {
//     test.skip(browserName === 'chromium', 'Still working on it')
//     await expect(page).toHaveTitle('Conduit')
//
//     await page.fill('input[type = "email"]' , 'nerxtest@gmail.com')
//     await page.type('input[type = "password"]' , 'nerxtest')
//     await page.click('form >> "Sign in"')
//     const locator = page.locator('.navbar-brand');
//     await expect(locator).toContainText('conduit' , {timeout:30000})
//     console.log('---test2---')
//
// })


// How to skip group of tests



// test.describe('group A', () => {
//     test.skip(({browserName}) => browserName === 'chromium', 'Still working on it');
//     test("basic test", async ({page}) => {
//
//         await expect(page).toHaveTitle('Conduit')
//
//         await page.fill('input[type = "email"]' , 'nerxtest@gmail.com')
//         await page.type('input[type = "password"]' , 'nerxtest')
//         await page.click('form >> "Sign in"')
//         const locator = page.locator('.navbar-brand');
//         await expect(locator).toContainText('conduit' , {timeout:30000})
//         console.log('---test1---')
//
//     })
//
//     test("login test", async ({page}) => {
//
//         await expect(page).toHaveTitle('Conduit')
//
//         await page.fill('input[type = "email"]' , 'nerxtest@gmail.com')
//         await page.type('input[type = "password"]' , 'nerxtest')
//         await page.click('form >> "Sign in"')
//         const locator = page.locator('.navbar-brand');
//         await expect(locator).toContainText('conduit' , {timeout:30000})
//         console.log('---test2---')
//
//     })
// })


// How to run smoke tests
// write in console "npx playwright test --grep @smoke"   !!!!!!! DO NOT WORK !!!!!!!!!!!

// test('basic test @smoke', async ({page}) => {
//
//     await expect(page).toHaveTitle('Conduit')
//
//     await page.fill('input[type = "email"]' , 'nerxtest@gmail.com')
//     await page.type('input[type = "password"]' , 'nerxtest')
//     await page.click('form >> "Sign in"')
//     const locator = page.locator('.navbar-brand');
//     await expect(locator).toContainText('conduit' , {timeout:30000})
//     console.log('---test2---')
//
// })




