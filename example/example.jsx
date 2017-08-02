import React from 'react';
import ReactDOM from 'react-dom';
import {FeatureToggleProvider} from '../lib/index';
import FeatureToggledComponent from './FeatureToggledComponent';

const toggleNames = {
    SHOW_HELLO_WORLD: 'showHelloWorld'
    // ... add more here
};

const toggles = {
    // Try setting this to true
    [toggleNames.SHOW_HELLO_WORLD]: true
    // ... add more here
};

const ExampleComponent = () => (
    <FeatureToggleProvider featureToggleList={toggles}>
        <div>
            <h1>Toggling Example</h1>
            <FeatureToggledComponent/>
        </div>
    </FeatureToggleProvider>
);


ReactDOM.render(<ExampleComponent/>, document.getElementById('example'));
