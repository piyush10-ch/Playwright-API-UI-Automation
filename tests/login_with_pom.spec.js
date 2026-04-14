import {test, expect} from '@playwright/test'
import {LoginPage} from '../pages/login'
test('Login with POm',async({page})=>{
    const loginpage= new LoginPage(page)
    await loginpage.goto()
    await loginpage.login('Admin','admin123')
    await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible({timeout:15000})
    await loginpage.clickPIM()
    await loginpage.clickMyInfo()

})