const { findElementBy } = require('../../../support/actions/Locator');

class Header {
    constructor() {
    }

    get pageTitle() {
        return findElementBy("xpath",
            "//android.widget.TextView[@resource-id='com.androidsample.generalstore:id/toolbar_title']");
    }

    get btnBack() {
        return findElementBy("xpath",
            "//android.widget.ImageButton[@resource-id='com.androidsample.generalstore:id/appbar_btn_back']");
    }

    get btnBasket() {
        return findElementBy("xpath", "//android.widget.ImageButton");
    }

    getTitlePage() {
        return this.pageTitle.getText();
    }
}

module.exports = Header;