function findElementBy(strategy, locator) {
    var element;
    switch (strategy) {
        case "accessibility":
            element = $('~' + locator);
            break;
        case "xpath":
            element = $(locator);
            break;
        case "uiautomator":
            element = $('android=' + locator);
            break;
    }

    return element;
}

module.exports = { findElementBy };