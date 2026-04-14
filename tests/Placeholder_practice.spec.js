import{test, expect} from '@playwright/test'
test.beforeEach(async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/')
    await expect(page.getByPlaceholder('Username')).toBeVisible()
})
test('orangehrm',async({page})=>{
   
    await page.getByRole('textbox',{name:'Username'}).fill('Admin')
    await page.getByRole('textbox',{name:'Password'}).fill('admin123')
    await page.getByRole('button',{name:'Login'}).click()
    await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible()
    await page.locator('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click({timeout:15000})
    await page.getByText('Logout').click()
    await expect(page.getByPlaceholder('Username')).toBeVisible()
    

})
test('check incorrect password',async({page})=>{
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin56')
    await page.getByRole('button',{name:'Login'}).click()
    await expect(page.getByText('Invalid credentials')).toBeVisible()
})
test('check incorrect username', async({page})=>{
    await page.getByRole('textbox',{name:'Username'}).fill('efsfdcs')
    await page.getByRole('textbox',{name:'Password'}).fill('Admin123')
    await page.getByRole('button',{name:'Login'}).click()
    await expect(page.getByText('Invalid credentials')).toBeVisible()
})

