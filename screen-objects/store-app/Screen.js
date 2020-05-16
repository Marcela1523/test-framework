import Header from './screen-components/Header';

class Screen extends Header{
    constructor(pageTitle){
        super();
        this.pageTitleToBeDisplayed = pageTitle;
    }

    waitForScreenDisplayed(){
        this.mainObject.waitForDisplayed(15000);
    }

    getTextPageTitleToBeDisplayed(){
        return this.pageTitleToBeDisplayed;
    }
}

module.exports = Screen;