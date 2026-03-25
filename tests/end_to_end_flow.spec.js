import {test, expect} from '@playwright/test';
test('End to end flow',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.getByPlaceholder('username').fill('Admin')
    await page.getByPlaceholder('password').fill('admin123')
    await page.getByRole('button',{name:'Login'}).click()
    await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible()
    await page.getByRole('link',{name:'PIM'}).click()
    await page.getByPlaceholder('Type for hints...').nth(0).fill('Piyush')
    await page.locator('.oxd-input.oxd-input--active').nth(1).fill('001')
    await page.locator('.oxd-select-text-input').nth(0).click()

})
