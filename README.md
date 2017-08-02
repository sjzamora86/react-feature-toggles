# react-feature-toggles-extended
This application is extended version of [react-feature-toggles](https://github.com/RosyTucker/react-feature-toggles)

## Extension
This project aims to create a HOC feature that wraps the feature toggling component instead of using a declarative component.
Using HOC will make the refactoring a lot easier for existing applications that requires feature toggles.    

## Install (Still not available as npm module)

`npm install --save react-feature-toggles`

## Usage

Wrap your app in the `FeatureToggleProvider` and pass in a list of toggles, then use the `withFeatureToggle` HOC on your existing or newly created component that you want to feature toggled.

`FeatureToggleProvider` must have only one child, this is so that the library isn't rendering additional elements on your behalf and making assumptions about your needs e.g you may want an `<li>` rather than a `<div>`.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { FeatureToggleProvider } from 'react-feature-toggles';

const toggles = {
  // Try setting this to true
  SHOW_HELLO_WORLD: false
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


ReactDOM.render(<ExampleApp />, document.getElementById('example'));
```

```javascript
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
```

### Redux

To use with redux you may want to do something like: 

```
const mapStateToProps = state => ({
  featureToggleList: state.features,
});

const ConnectedFeatureToggleProvider = connect(mapStateToProps)(FeatureToggleProvider);
```

And then use the connected provider in place of the normal provider.

## Building the example

- Clone this repo
- Run `npm install`
- Run `npm run build`
- Run `npm run build-example`
- Open `example/example.html` in the browser
- Play around with the toggle values
