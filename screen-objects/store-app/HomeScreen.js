import Screen from './Screen';
import { scrollIntoViewUntilText } from '../../support/actions/Scroll';
const { findElementBy } = require('../../support/actions/Locator');

class HomeScreen extends Screen {

    constructor() {
        super("General Store")
    }

    get lstCountry() {
        return findElementBy("xpath",
            "//android.widget.Spinner[@resource-id='com.androidsample.generalstore:id/spinnerCountry']");
    }

    get txtName() {
        return findElementBy("xpath", "//android.widget.EditText");
    }

    get rbtnMale() {
        return findElementBy("uiautomator", 'new UiSelector().text("Male")');
    }

    get rbtnFemale() {
        return findElementBy("uiautomator",'new UiSelector().text("Female")');
    }

    get btnShop() {
        return findElementBy("uiautomator",'new UiSelector().text("Let\'s  Shop")');
    }

    submitFields(country = null, name = null, gender = null) {
        if (country) {
            this.lstCountry.click();
            scrollIntoViewUntilText(country);
            findElementBy("uiautomator", 'UiSelector().text("' + country + '")').click();
        }
        if (name) {
            this.txtName.setValue(name);
        }
        if (gender) {
            if (gender == "Female") {
                this.rbtnFemale.click();
            }
            else {
                this.rbtnMale.click();
            }
        }

        this.btnShop.click();
    }
}

module.exports = new HomeScreen();