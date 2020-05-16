const expect = require('chai').expect;

function stringIsEqual(text, expectedText, expectedBoolean = true) {
    
    if (!expectedBoolean) {
        expect(text).to.equal(expectedText, text +
            " is not the expected: " + expectedText)
    } else {
        expect(text).not.to.equal(expectedText, 'Message ' + text +
            " is not different than " + expectedText)
    }
}

function stringContains(text, textContained, expectedBoolean = true) {
    if (!expectedBoolean) {
        expect(text).to.contain(expectedText, 'Message ' + text +
            " does not contained " + expectedText)
    } else {
        expect(text).not.to.contain(expectedText, 'Message ' + text +
            " contains " + expectedText)
    }
}

module.exports = { stringIsEqual, stringContains }