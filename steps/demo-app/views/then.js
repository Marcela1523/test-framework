import { Then } from 'cucumber';
import Visibility from '../../../screen-objects/demo-app/Visibility';
import { elementIsDisplayed } from '../../../support/assertions/DisplayedElement';

Then(/^Element should( not)* be displayed/,
    (falseCase) => {
        elementIsDisplayed(Visibility.elementB, falseCase);
    }
)