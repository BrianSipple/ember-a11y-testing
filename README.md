# ember-a11y-testing

[![Build Status](https://travis-ci.org/ember-a11y/ember-a11y-testing.svg)](https://travis-ci.org/ember-a11y/ember-a11y-testing)
[![NPM Version](https://badge.fury.io/js/ember-a11y-testing.svg)](http://badge.fury.io/js/ember-a11y-testing)
[![Ember Observer Score](https://emberobserver.com/badges/ember-a11y-testing.svg)](https://emberobserver.com/addons/ember-a11y-testing)

Ember A11y Testing is a wrapper around [Deque Labs'](https://github.com/dequelabs)
[axe-core](https://github.com/dequelabs/axe-core) accessibility testing engine.
It automatically integrates into your testing environment by running during the
`afterRender` step in the [run loop](http://guides.emberjs.com/v1.10.0/understanding-ember/run-loop/)
during any acceptance tests.

If you're using Ember 1.13.0 or above, it also integrates into your development
workflow by running during a component's `didRender` phase in non-production
environments. This gives you instant feedback on if your component's are
accessible in any given state.

## Installation

```bash
ember install ember-a11y-testing
```

## Usage

### Testing Usage
By default, Ember A11y Testing will automatically begin running during _acceptance_ tests. It
also injects the `axe` object globally during development so you can run tests
while developing your application as well.

_Note:_ any tests run with Ember A11y Testing will adjust the testing container
to occupy the entire screen. This is to simulate the actual application
environment, as browsers adjust styles at small sizes for accessibility reasons.
It will reset itself at the conclusion of testing though.

#### Disabling/Enabling Axe During Tests

By default, the axe-core tests only run during acceptance tests. In order to
enable them for other tests, simply run the following at the beginning of your
testing module:

```javascript
axe.ember.turnAxeOn();
```

On the flip side, if you want to turn tests off, simply use:

```javascript
axe.ember.turnAxeOff();
```

#### Setting Axe Test Options

You can pass specific options to be used during `a11yCheck` by setting them on a
global `testOptions` property:

```javascript
axe.ember.testOptions = {
  runOnly: {
    type: "tag",
    values: ["wcag2a"]
  }
};
```

You can see the available options in the [axe-core repo](https://github.com/dequelabs/axe-core/blob/master/doc/API.md#b-options-parameter).

_Note:_ the options will stay set, until set to something different.


### Development Usage

Usage in development is restricted to applications using Ember 1.13, and up as it
relies on the `didRender` hook of a component's life-cycle (a feature only
available in versions of Ember with the Glimmer rendering engine).

That said, setup for development is as simple as it is for testing: simply
install the addon.

By default, Ember A11y Testing will audit a component for accessibility each
time it is rendered. This ensures that the component is still accessible even
after state changes, and since the checks are scoped to a component's element,
it means that any state change propagated downwards is also caught.

#### Inspecting Violations
When a violation is detected for a component's element, the element will have the `.axe-violation` class added to it. Visually, this will produce a striping pattern over the element (which will disappear on hover) designed to make it easily distinguishable from its expected appearance, even for users with low vision.

Take this text input without a label, for example:

![](docs/assets/violation-styling.png)

At the same time, a violation error message will be logged to the console with even more detailed information as to what went wrong. The following message corresponds to the same text input element above:

![](docs/assets/violation-console-output.png)


#### Component Hooks

Since development is not a uniform experience, Ember A11y Testing provides
several hooks to help stay out of the way.

_Note:_ these are all `undefined` by default.

##### Defining a custom callback

If you feel the logging of violations is poor or you just want to see the entire
results of a component's audit, you can define a custom callback. The callback
receives the results of the `a11yCheck` audit that is scoped to the component's
element. Simply set it as `axeCallback` on the component in question:

```javascript
axeCallback(results) {
  // do stuff with results
}
```

##### Setting options for the audit

As with testing, if you need to set custom auditing options for a component, you
can do so easily. Simply set a value for the `axeOptions` property value:

```javascript
axeOptions: { /* a11yCheck options */ }
```

##### Turning the audit off

Lastly, if you really find the audits to be cramping development, you can turn
them off via a simple boolean switch:

```javascript
turnAuditOff: true
```

#### Environment Options
With the exception of `turnAuditOff`, each of the fine-grained component hooks above can instead be defined for ALL components inside of your application's `config/environment.js` file. Simply supply them in a `componentOptions` hash on the `ember-a11y-testing` property of `ENV`.

```javascript
ENV['ember-a11y-testing'] = {
    componentOptions: {
      axeCallback: defaultAxeCallback,
      axeOptions: defaultAxeOptions
    }
  }
};
```

## Future Plans

Now that your components and acceptance tests can self-audit, the next step
going forward is to give helpful and meaningful feedback to developers. This
means easily highlighting areas with violations and giving suggestions on how to
fix and improve them. Additionally, work will be done to tackle Ember-specific
accessibility issues, such as identifying actions on inaccessible elements.
