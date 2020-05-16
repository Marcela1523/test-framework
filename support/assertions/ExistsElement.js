const expect = require('chai').expect;

function existElement(element, expectedBoolean = true) {
    if(expectedBoolean){
        expect(element).toBeGreaterThanOrEqual(1, element + " should exist");
    } else {
        expect(element).toHaveLength(0, element + " should not exist");
    }   
}

module.exports = { existElement };