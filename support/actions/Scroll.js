function scrollDown(element, scrolls) {
    if (!element.isDisplayed()) {
        for (let i = 0; i < scrolls; i++) {
            if (element.isDisplayed()) {
                break;
            }

            driver.touchAction([
                { action: 'press', x: 500, y: 1000 },
                { action: 'moveTo', x: 500, y: 400 },
                'release'
            ]);
        }
    }

    return;
}

function scrollIntoViewUntilText(text) {
    return $('android=new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().textMatches(\"' + text + '\").instance(0))');
}

module.exports = { scrollDown, scrollIntoViewUntilText };