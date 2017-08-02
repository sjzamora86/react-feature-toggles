import * as React from 'react';
import PropTypes from 'prop-types';

export function withFeatureToggle(WrappedComponent, featureName) {
    class FeatureToggle extends React.Component {
        render() {
            const toggleState = this.context.featureToggleList[featureName];
            const showContent = !!toggleState;
            return showContent ? <WrappedComponent {...this.props}/> : null;
        }
    }

    FeatureToggle.contextTypes = {
        featureToggleList: PropTypes.objectOf(PropTypes.bool).isRequired
    };

    return FeatureToggle;

}
