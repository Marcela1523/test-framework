const expect = require('chai').expect;
const { globalSettings } = require('../../config/GlobalSettings')

function elementIsDisplayed(element, expectedBoolean) {
    var elementIsDisplayed = element.isDisplayed(globalSettings.WAIT_FOR_ELEMENT);
    expect(elementIsDisplayed).to.equal(!expectedBoolean)
}

module.exports = { elementIsDisplayed };