import React from 'react';
import ReactDOM from 'react-dom';
import {FeatureToggleProvider} from '../lib/index';
import FeatureToggledButton from './FeatureToggledButton';

const toggleNames = {
    SHOW_HELLO_WORLD: 'showHelloWorld',
    SHOW_BUTTON: 'showButton'
    // ... add more here
};

const toggles = {
    // Try setting this to true
    [toggleNames.SHOW_HELLO_WORLD]: false,
    [toggleNames.SHOW_BUTTON]: true
    // ... add more here
};

const ExampleComponent = () => (
    <FeatureToggleProvider featureToggleList={toggles}>
        <div>
            <h1>Toggling Example</h1>
            <FeatureToggledButton/>
        </div>
    </FeatureToggleProvider>
);


ReactDOM.render(<ExampleComponent/>, document.getElementById('example'));
