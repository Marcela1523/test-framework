import { Given } from 'cucumber';
import ViewScreen from '../../../screen-objects/demo-app/ViewScreen';
import { scrollDown } from '../../../support/actions/Scroll';

Given(/^Selects "(Visibility|App)" option from the list$/,
    (option) => {
        scrollDown(ViewScreen.visibility, 10);
        ViewScreen.goToVisibility();
    }
)