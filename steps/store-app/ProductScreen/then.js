import { Then } from 'cucumber';
import ProductScreen from '../../../screen-objects/store-app/ProductScreen';
import { elementIsDisplayed } from '../../../support/assertions/DisplayedElement';

Then(
    /^Produc list is( not)* displayed$/,
    (displayed) => {
        elementIsDisplayed(ProductScreen.lstProducts, displayed);
    }
);
