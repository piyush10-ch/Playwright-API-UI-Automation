import {expect} from '@playwright/test'
export class LoginPage{
    constructor(page){
        this.page=page
        this.username=page.getByPlaceholder('Username')
        this.password=page.getByPlaceholder('Password')
        this.loginbtn=page.getByRole('button',{name:'Login'})
        this.dashboardcheck=page.getByRole('heading',{name:'Dashboard'})
        this.clickpim=page.getByRole('link',{name:'PIM'})
        this.myinfo=page.getByRole('link',{name:'My Info'})}

    async goto() {   // ← yeh add karo
        await this.page.goto('https://opensource-demo.orangehrmlive.com/')
    }
       
    async login(un,pw){
        await this.username.fill(un)
        await this.password.fill(pw)
        await this.loginbtn.click()
    }
    async isLoaded(){
        await expect(this.dashboardcheck).toBeVisible({timeout:15000})
    }
    async clickPIM(){
        await this.clickpim.click()
    }
    async clickMyInfo(){
        await this.myinfo.click()

    }

}
