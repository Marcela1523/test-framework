import { Given } from 'cucumber'; 
import DemoScreen from '../../../screen-objects/demo-app/DemoScreen';

Given(/^Navigates to "(View|App)" menu$/,
    (option) => {
        if(option == 'View'){
            DemoScreen.goToViews();
        } else {
            DemoScreen.goToAppMenu();
        }
    }
)