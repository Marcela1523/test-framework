const { findElementBy } = require('../../support/actions/Locator');

class ViewScreen {
    get imageSwitcher(){
        return findElementBy("accessibility", "ImageSwitcher");
    }

    get visibility(){
        return findElementBy("accessibility", "Visibility");
    }

    goToImages(){
        this.imageSwitcher.click();
    }

    goToVisibility(){
        this.visibility.click();
    }
}

module.exports = new ViewScreen();