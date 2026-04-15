    export class LoginPage{
        constructor(page){
            this.page=page
            this.username=page.getByPlaceholder('Username')
            this.password=page.getByPlaceholder('Password')
            this.loginbtn=page.getByRole('button',{name:'Login'})
        
            this.clickpim=page.getByRole('link',{name:'PIM'})
            this.myinfo=page.getByRole('link',{name:'My Info'})}

        
        
        async login(un,pw){
            await this.username.fill(un)
            await this.password.fill(pw)
            await this.loginbtn.click()
        }
    
        async clickPIM(){
            await this.clickpim.click()
        }
        async clickMyInfo(){
            await this.myinfo.click()

        }

    }
