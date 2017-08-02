import * as React from 'react';
import {withFeatureToggle} from '../lib/hoc/featureToggle';
class FeatureToggledButton extends React.Component {
    render() {
        return (
            <div>
                <span>I'm a button</span>
            </div>
        );
    }
}

export default withFeatureToggle(FeatureToggledButton, "showButton");