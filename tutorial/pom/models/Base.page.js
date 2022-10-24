let URL = 'https://demo.applitools.com/';

class BasePage{
    
    constructor(page){
        this.page = page;
    }
    
    async navigate(path){
        await this.page.goto(`${URL}${path}`);

    }
}
module.exports = BasePage;