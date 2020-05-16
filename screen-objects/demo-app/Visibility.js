const { findElementBy } = require('../../support/actions/Locator');

class Visibility {

    get btnVisibility() {
        return findElementBy("accessibility", "Vis");
    }

    get btnInvisible() {
        return findElementBy("accessibility", "Invis");
    }

    get btnGone() {
        return findElementBy("accessibility", "Gone");
    }

    get elementB() {
        return findElementBy("accessibility", "View B");
    }

    hideElement() {
        return this.btnInvisible.click();
    }

    showElement() {
        return this.btnVisibility.click();
    }

    goneElement() {
        return this.btnGone.click();
    }

}

module.exports = new Visibility();