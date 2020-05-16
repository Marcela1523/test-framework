const { findElementBy } = require('../../support/actions/Locator');

class DemosScreen {
    get accessibility() { return findElementBy("accessibility", "App"); }

    get views() { return findElementBy("accessibility", "Views"); }

    goToAppMenu(){
        this.accessibility.click();
    }

    goToViews(){
        this.views.click();
    }
}

module.exports = new DemosScreen();