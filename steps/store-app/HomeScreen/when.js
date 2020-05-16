import { When } from 'cucumber';
import HomeScreen from '../../../screen-objects/store-app/HomeScreen';

When(/^The user submits "(.*)", "(.*)" and "(.*)" fields$/,
    (country, name, gender) => {
        HomeScreen.submitFields(country, name, gender);
    }
);