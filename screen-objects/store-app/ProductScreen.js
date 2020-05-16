import Screen from './Screen';
const { findElementBy } = require('../../support/actions/Locator');

class Product extends Screen{
    constructor(){
        super("Products");
    }

    get lstProducts() {
        return findElementBy("xpath", "//*[@class='android.support.v7.widget.RecyclerView']")
    }
}

module.exports = new Product();