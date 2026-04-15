import {test, expect} from '@playwright/test'
import {LoginPage} from '../pages/login'
test('Login with POm',async({page})=>{
    const loginpage= new LoginPage(page)
     await page.goto('https://opensource-demo.orangehrmlive.com/')
    await loginpage.login('Admin','admin123')
    await page.waitForURL('**/dashboard/index');
    await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible({timeout:30000})
    await loginpage.clickPIM()
    await loginpage.clickMyInfo()

})