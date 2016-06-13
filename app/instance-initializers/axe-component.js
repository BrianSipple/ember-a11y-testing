import Ember from 'ember';
import ENV from '../config/environment';

const { Component, isArray, $, Logger, assert } = Ember;

/**
 * Variable to ensure that the initializer is only ran once. Though in this
 * particular case, running more than once shouldn't cause side-effects.
 * @type {Boolean}
 */
let hasRan = false;

export function initialize(application) {
  if (hasRan) { return; }

  const addonConfig = ENV['ember-a11y-testing'] || {};
  const { componentOptions: { axeOptions, axeCallback } = {} } = addonConfig;

  Component.reopen({
    /**
     * An optional callback to process the results from the a11yCheck.
     * Defaults to `undefined` if not set in the application's configuration.
     *
     * @public
     * @type {Function}
     */
    axeCallback,

    /**
     * An optional options object to be used in a11yCheck.
     * Defaults to `undefined` if not set in the application's configuration.
     * @public
     * @type {Object}
     */
    axeOptions,

    /**
     * An array of classNames to add to the component when a violation occurs.
     * If unspecified, the `axe-violation` class is used to apply our default
     * styling
     *
     * @public
     * @type {Array}
     */
    axeViolationClassNames: ['axe-violation'],

    /**
     * Turns off the accessibility audit during rendering.
     *
     * @public
     * @type {Boolean}
     */
    turnAuditOff: false,

    /**
     * Runs an accessibility audit on any render of the component.
     *
     * @private
     * @return {Void}
     */
    _runAudit() {
      if (this.turnAuditOff || Ember.testing) { return; }
      this.audit();
    },


    /**
     * Handles the results of running `axe.a11yCheck`
     * by generating a violation response for each violation, and
     * then passes the results to the `axeCallback` if one is defined.
     *
     * @private
     * @return {Void}
     */
    _handleA11yCheck(results) {
      const violationClassNames = this.get('axeViolationClassNames');
      assert('axeViolationClassNames should be an array of class names', isArray(violationClassNames));

      results.violations.forEach((v, idx) => this._generateViolation(v, idx+1, violationClassNames));

      if (this.axeCallback) {
        assert('axeCallback should be a function.', typeof this.axeCallback === 'function');
        this.axeCallback(results);
      }
    },

    /**
     * Logs a violtion to the console and adds classes to the violation target
     * node to display a warning
     *
     * @private
     * @return {Void}
     */
    _generateViolation(violation, violationNum, violationClassNames) {
      Logger.error(`Violation #${violationNum}`, violation);

      violation.nodes.forEach((node) => {
        $(node.target.join(','))[0].classList.add(...violationClassNames);
      });
    },


    didRender() {
      this._super(...arguments);
      this._runAudit();
    },

    /**
     * Runs the axe a11yCheck audit if this component has a defined tagName.
     *
     * @public
     * @return {Void}
     */
    audit() {
      if (this.get('tagName') !== '') {
        axe.a11yCheck(this.$(), this.axeOptions, this._handleA11yCheck.bind(this));
      }
    }
  });

  hasRan = true;
}

export default {
  name: 'axe-component',
  initialize
};
