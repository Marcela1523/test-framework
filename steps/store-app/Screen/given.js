import { Given } from 'cucumber';
import HomeScreen from '../../../screen-objects/store-app/HomeScreen';
import ProductScreen from '../../../screen-objects/store-app/ProductScreen';
import { stringIsEqual } from '../../../support/assertions/StringAssertions';

Given(/^"(Home|Product|Basket)" screen is( not)* displayed$/,
    (screen, booleanCase) => {
        console.log(booleanCase)
        switch (screen) {
            case "Home":
                stringIsEqual(HomeScreen.getTitlePage(),
                    HomeScreen.getTextPageTitleToBeDisplayed(), booleanCase);
                break;
            case "Product":
                stringIsEqual(ProductScreen.getTitlePage(),
                    ProductScreen.getTextPageTitleToBeDisplayed(), booleanCase);
                break;
            default:
                break;
        }
    }
);
