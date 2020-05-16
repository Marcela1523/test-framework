import { When } from 'cucumber';
import Visibility from '../../../screen-objects/demo-app/Visibility';

When(/^Clicks on "(Visible|Hide|Gone)" option/,
    (option) => {
        switch (option) {
            case 'Visible':
                Visibility.showElement();
                break;
            case 'Hide':
                Visibility.hideElement();
                break;
            default:
                Visibility.goneElement();
                break;
        }
    }
);