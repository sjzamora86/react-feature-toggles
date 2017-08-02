import * as React from 'react';
import {withFeatureToggle} from '../lib/hoc/featureToggle';
class FeatureToggledComponent extends React.Component {
    render() {
        return (
            <div>
                <span>Component that can be toggled</span>
                <ul>
                    <li>List 1</li>
                    <li>List 2</li>
                    <li>List 3</li>
                </ul>
            </div>
        );
    }
}

export default withFeatureToggle(FeatureToggledComponent, "showHelloWorld");