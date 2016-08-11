"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _ember, _dummyResolver, _emberLoadInitializers, _dummyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _dummyResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('dummy/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dummy/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _dummyConfigEnvironment) {

  var name = _dummyConfigEnvironment['default'].APP.name;
  var version = _dummyConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define("dummy/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (exports, _liquidFireComponentsIlliquidModel) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsIlliquidModel["default"];
    }
  });
});
define('dummy/components/labeled-radio-button', ['exports', 'ember-radio-button/components/labeled-radio-button'], function (exports, _emberRadioButtonComponentsLabeledRadioButton) {
  exports['default'] = _emberRadioButtonComponentsLabeledRadioButton['default'];
});
define("dummy/components/lf-outlet", ["exports", "liquid-fire/ember-internals"], function (exports, _liquidFireEmberInternals) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireEmberInternals.StaticOutlet;
    }
  });
});
define("dummy/components/lf-overlay", ["exports", "liquid-fire/components/lf-overlay"], function (exports, _liquidFireComponentsLfOverlay) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLfOverlay["default"];
    }
  });
});
define("dummy/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (exports, _liquidFireComponentsLiquidBind) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidBind["default"];
    }
  });
});
define("dummy/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (exports, _liquidFireComponentsLiquidChild) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidChild["default"];
    }
  });
});
define("dummy/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (exports, _liquidFireComponentsLiquidContainer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidContainer["default"];
    }
  });
});
define("dummy/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (exports, _liquidFireComponentsLiquidIf) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidIf["default"];
    }
  });
});
define("dummy/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (exports, _liquidFireComponentsLiquidMeasured) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured["default"];
    }
  });
  Object.defineProperty(exports, "measure", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured.measure;
    }
  });
});
define("dummy/components/liquid-modal", ["exports", "liquid-fire/components/liquid-modal"], function (exports, _liquidFireComponentsLiquidModal) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidModal["default"];
    }
  });
});
define("dummy/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (exports, _liquidFireComponentsLiquidOutlet) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidOutlet["default"];
    }
  });
});
define("dummy/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (exports, _liquidFireComponentsLiquidSpacer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSpacer["default"];
    }
  });
});
define('dummy/components/liquid-sync', ['exports', 'liquid-fire/components/liquid-sync'], function (exports, _liquidFireComponentsLiquidSync) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSync['default'];
    }
  });
});
define("dummy/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (exports, _liquidFireComponentsLiquidUnless) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidUnless["default"];
    }
  });
});
define("dummy/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (exports, _liquidFireComponentsLiquidVersions) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidVersions["default"];
    }
  });
});
define("dummy/components/lm-container", ["exports", "liquid-fire/components/lm-container"], function (exports, _liquidFireComponentsLmContainer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLmContainer["default"];
    }
  });
});
define('dummy/components/page-title', ['exports', 'ember', 'dummy/templates/components/page-title'], function (exports, _ember, _dummyTemplatesComponentsPageTitle) {

  /**
   * A simple page title component that we can use during testing to
   * perform opertations on a VIOLATIONLESS element
   */
  exports['default'] = _ember['default'].Component.extend({
    layout: _dummyTemplatesComponentsPageTitle['default'],
    tagName: 'h2',
    title: null,

    click: function click(ev) {
      ev.preventDefault();

      if (_ember['default'].testing) {
        this.set('title', 'Clicked during tests');
      }
    }
  });
});
define('dummy/components/passing-component', ['exports', 'ember'], function (exports, _ember) {
  var Component = _ember['default'].Component;
  exports['default'] = Component.extend({
    actions: {
      toggle: function toggle() {
        this.set('isFailing', true);
      }
    }
  });
});
define('dummy/components/radio-button-input', ['exports', 'ember-radio-button/components/radio-button-input'], function (exports, _emberRadioButtonComponentsRadioButtonInput) {
  exports['default'] = _emberRadioButtonComponentsRadioButtonInput['default'];
});
define('dummy/components/radio-button', ['exports', 'ember-radio-button/components/radio-button'], function (exports, _emberRadioButtonComponentsRadioButton) {
  exports['default'] = _emberRadioButtonComponentsRadioButton['default'];
});
define('dummy/components/violations-grid-item', ['exports', 'ember', 'dummy/templates/components/violations-grid-item'], function (exports, _ember, _dummyTemplatesComponentsViolationsGridItem) {
  var Component = _ember['default'].Component;
  exports['default'] = Component.extend({
    layout: _dummyTemplatesComponentsViolationsGridItem['default'],
    tagName: 'li',
    classNames: ['c-violations-grid-item', 'o-content-box'],

    title: null
  });
});
define('dummy/components/x-button', ['exports', 'ember'], function (exports, _ember) {
  var Component = _ember['default'].Component;
  exports['default'] = Component.extend({
    classNames: ['c-button'],
    tagName: 'button'
  });
});
define('dummy/components/x-div', ['exports', 'ember-component', 'dummy/templates/components/x-div'], function (exports, _emberComponent, _dummyTemplatesComponentsXDiv) {

  /**
   * This component merely exists as a convinence for creating
   * components with violations that don't quite fit into any
   * other element tag category. 
   */
  exports['default'] = _emberComponent['default'].extend({
    layout: _dummyTemplatesComponentsXDiv['default'],
    tagName: 'div'
  });
});
define('dummy/components/x-image', ['exports', 'ember-component', 'dummy/templates/components/x-image'], function (exports, _emberComponent, _dummyTemplatesComponentsXImage) {
  exports['default'] = _emberComponent['default'].extend({
    layout: _dummyTemplatesComponentsXImage['default'],
    tagName: 'img',
    classNames: ['c-img'],
    attributeBindings: ['alt', 'src', 'srcset', 'sizes'],

    /**
     *💡💡 NOTE: Even an emtpy string has a separate and important meaning
     * compared to the attribute not existing altogether
     * @see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt
     */
    alt: null,

    src: null,
    srcset: null,
    sizes: null
  });
});
define('dummy/components/x-paragraph', ['exports', 'ember', 'dummy/templates/components/x-paragraph'], function (exports, _ember, _dummyTemplatesComponentsXParagraph) {
  exports['default'] = _ember['default'].Component.extend({
    layout: _dummyTemplatesComponentsXParagraph['default'],
    tagName: 'p',
    classNames: ['c-paragraph']
  });
});
define('dummy/components/x-text-input', ['exports', 'ember'], function (exports, _ember) {
  var Component = _ember['default'].Component;
  exports['default'] = Component.extend({
    classNames: ['c-text-input'],
    tagName: 'input'
  });
});
define('dummy/ember-a11y-testing/tests/modules/ember-a11y-testing/utils/is-background-replaced-element.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-a11y-testing/utils/is-background-replaced-element.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-a11y-testing/utils/is-background-replaced-element.js should pass jshint.');
  });
});
define('dummy/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dummyConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_dummyConfigEnvironment['default'].APP.name, _dummyConfigEnvironment['default'].APP.version)
  };
});
define('dummy/initializers/component-data-attributes', ['exports', 'ember'], function (exports, _ember) {
  exports.initialize = initialize;
  var Component = _ember['default'].Component;

  function initialize() /* application */{
    Component.reopen({
      attributeBindings: ['data-test-selector']
    });
  }

  exports['default'] = {
    name: 'component-data-attributes',
    initialize: initialize
  };
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define("dummy/initializers/liquid-fire", ["exports", "liquid-fire/router-dsl-ext", "liquid-fire/ember-internals"], function (exports, _liquidFireRouterDslExt, _liquidFireEmberInternals) {
  (0, _liquidFireEmberInternals.registerKeywords)();

  exports["default"] = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };
});
// This initializer exists only to make sure that the following
// imports happen before the app boots.
define('dummy/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define('dummy/instance-initializers/axe-component', ['exports', 'ember', 'dummy/config/environment', 'ember-a11y-testing/utils/is-background-replaced-element'], function (exports, _ember, _dummyConfigEnvironment, _emberA11yTestingUtilsIsBackgroundReplacedElement) {
  exports.initialize = initialize;

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;
  var isEmpty = _ember['default'].isEmpty;
  var isArray = _ember['default'].isArray;
  var scheduleOnce = _ember['default'].run.scheduleOnce;

  var VIOLATION_CLASS__LEVEL_1 = 'axe-violation--level-1';
  var VIOLATION_CLASS__LEVEL_2 = 'axe-violation--level-2';
  var VIOLATION_CLASS__LEVEL_3 = 'axe-violation--level-3';
  var VIOLATION_CLASS__REPLACED = 'axe-violation--replaced-element';

  /*
   * Mapping of violation class names to their corresponding `visualNoiseLevel`
   */
  var VIOLATION_CLASS_MAP = {
    LEVEL_1: VIOLATION_CLASS__LEVEL_1,
    LEVEL_2: VIOLATION_CLASS__LEVEL_2,
    LEVEL_3: VIOLATION_CLASS__LEVEL_3,
    REPLACED_ELEMENT: VIOLATION_CLASS__REPLACED
  };

  var VIOLATION_CLASS_NAMES = Object.keys(VIOLATION_CLASS_MAP).map(function (key) {
    return VIOLATION_CLASS_MAP[key];
  });

  /**
   * Variable to ensure that the initializer is only ran once. Though in this
   * particular case, running more than once shouldn't cause side-effects.
   * @type {Boolean}
   */
  var hasRan = false;

  function initialize(application) {
    if (hasRan) {
      return;
    }

    var addonConfig = _dummyConfigEnvironment['default']['ember-a11y-testing'] || {};
    var _addonConfig$componentOptions = addonConfig.componentOptions;
    var componentOptions = _addonConfig$componentOptions === undefined ? {} : _addonConfig$componentOptions;
    var axeOptions = componentOptions.axeOptions;
    var axeCallback = componentOptions.axeCallback;
    var visualNoiseLevel = componentOptions.visualNoiseLevel;
    var axeViolationClassNames = componentOptions.axeViolationClassNames;

    debugger;
    Component.reopen({
      /**
       * An optional callback to process the results from the a11yCheck.
       * Defaults to `undefined` if not set in the application's configuration.
       *
       * @public
       * @type {Function}
       */
      axeCallback: axeCallback,

      /**
       * An optional options object to be used in a11yCheck.
       * Defaults to `undefined` if not set in the application's configuration.
       * @public
       * @type {Object}
       */
      axeOptions: axeOptions,

      /**
       * Turns off the accessibility audit during rendering.
       *
       * @public
       * @type {Boolean}
       */
      turnAuditOff: false,

      /**
       * An array of classNames (or a space-separated string) to add to the component when a violation occurs.
       * If unspecified, `ember-a11y-testing` will use a default class according to
       * the current `visualNoiseLevel`
       *
       * @public
       * @type {(Array|string)}
       * @see(https://github.com/ember-a11y/ember-a11y-testing/blob/master/content-for/head-footer.html)
       */
      axeViolationClassNames: [],

      /**
       * A numeric setting to determine the class applied to elements with violations
       *
       * @public
       * @type {string}
       * @see(https://github.com/ember-a11y/ember-a11y-testing/blob/master/content-for/head-footer.html)
       */
      visualNoiseLevel: 1,

      /**
       * Computes class name to be set on the element according to the
       * current `visualNoiseLevel` and the value of `axeViolationClassNames`
       * (giving precedence to the latter).
       *
       * @private
       * @return {string}
       */
      violationClasses: computed('axeViolationClassNames', 'visualNoiseLevel', {
        get: function get() {
          var customViolationClass = this.get('axeViolationClassNames');
          var visualNoiseLevel = this.get('visualNoiseLevel');

          if (visualNoiseLevel < 1) {
            return null;
          }
          if (isEmpty(customViolationClass)) {
            return [VIOLATION_CLASS_MAP['LEVEL_' + visualNoiseLevel]];
          }

          return isArray(customViolationClass) ? customViolationClass : customViolationClass.trim().split(/\s+/);
        }
      }),

      didRender: function didRender() {
        this._super.apply(this, arguments);
        this._runAudit();
      },

      /**
       * Runs the axe a11yCheck audit and logs any violations to the console. It
       * then passes the results to axeCallback if one is defined.
       * @public
       * @return {Void}
       */
      audit: function audit() {
        var _this = this;

        debugger;
        if (this.get('tagName') !== '') {

          axe.a11yCheck(this.$(), this.axeOptions, function (results) {
            var violations = results.violations;
            var violationClasses = _this.get('violationClasses') || [];
            var visualNoiseLevel = _this.get('visualNoiseLevel');

            var violation = undefined;
            var nodes = undefined;
            var nodeData = undefined;
            var nodeElem = undefined;
            var classNamesToAdd = undefined;
            for (var i = 0, l = violations.length; i < l; i++) {
              violation = violations[i];

              _ember['default'].Logger.error('Violation #' + (i + 1), violation);

              nodes = violation.nodes;

              for (var j = 0, k = nodes.length; j < k; j++) {
                nodeData = nodes[j];
                debugger;
                if (nodeData) {
                  var _nodeElem$classList;

                  nodeElem = document.querySelector(nodeData.target.join(','));
                  classNamesToAdd = (0, _emberA11yTestingUtilsIsBackgroundReplacedElement['default'])(nodeElem) ? [VIOLATION_CLASS_MAP.REPLACED_ELEMENT] : violationClasses;

                  (_nodeElem$classList = nodeElem.classList).remove.apply(_nodeElem$classList, _toConsumableArray(VIOLATION_CLASS_NAMES));

                  if (visualNoiseLevel > 0) {
                    var _nodeElem$classList2;

                    (_nodeElem$classList2 = nodeElem.classList).add.apply(_nodeElem$classList2, _toConsumableArray(classNamesToAdd));
                  }
                }
              }
            }

            if (_this.axeCallback) {
              _ember['default'].assert('axeCallback should be a function.', typeof _this.axeCallback === 'function');
              _this.axeCallback(results);
            }
          });
        }
      },

      /**
       * Runs an accessibility audit on any render of the component.
       * @private
       * @return {Void}
       */
      _runAudit: function _runAudit() {
        debugger;
        if (this.turnAuditOff || _ember['default'].testing) {
          return;
        }

        scheduleOnce('afterRender', this, 'audit');
      }
    });

    hasRan = true;
  }

  exports['default'] = {
    name: 'axe-component',
    initialize: initialize
  };
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dummyConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('violations', { path: '/' });
  });

  exports['default'] = Router;
});
define('dummy/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('dummy/routes/violations', ['exports', 'ember'], function (exports, _ember) {
  var Route = _ember['default'].Route;
  var set = _ember['default'].set;
  exports['default'] = Route.extend({
    model: function model() {
      return {
        currentNoiseLevel: 1
      };
    },

    actions: {
      updateCurrentNoiseLevel: function updateCurrentNoiseLevel(level) {

        /**
         * This is a bit hacky, but for the purposes of the demo, we can remove
         * the exisiting classes set so that axe will perfom its check without our styles
         * having influenced the results
         */
        document.querySelectorAll('[class*="axe-violation--"]').forEach(function (elem) {
          var _elem$classList;

          (_elem$classList = elem.classList).remove.apply(_elem$classList, [elem.className.match(/axe-violation--[^\s]*/g)]);
        });

        set(this.currentModel, 'currentNoiseLevel', level);
      }
    }
  });
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("dummy/services/liquid-fire-modals", ["exports", "liquid-fire/modals"], function (exports, _liquidFireModals) {
  exports["default"] = _liquidFireModals["default"];
});
define("dummy/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (exports, _liquidFireTransitionMap) {
  exports["default"] = _liquidFireTransitionMap["default"];
});
define("dummy/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "application o-content-box");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("header");
        dom.setAttribute(el2, "class", "application__header");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        dom.setAttribute(el3, "class", "u-align-center");
        var el4 = dom.createTextNode("Ember A11y Testing");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("main");
        dom.setAttribute(el2, "class", "application__main-content u-relative u-fill-width o-content-box--lg");
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 3]), 2, 2);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [10, 4], [10, 14]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/labeled-radio-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/labeled-radio-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "radio-button", [], ["radioClass", ["subexpr", "@mut", [["get", "radioClass", ["loc", [null, [2, 15], [2, 25]]]]], [], []], "radioId", ["subexpr", "@mut", [["get", "radioId", ["loc", [null, [3, 12], [3, 19]]]]], [], []], "changed", "innerRadioChanged", "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [5, 13], [5, 21]]]]], [], []], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [6, 15], [6, 25]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 9], [7, 13]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [8, 13], [8, 21]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [9, 10], [9, 15]]]]], [], []]], ["loc", [null, [1, 0], [9, 17]]]], ["content", "yield", ["loc", [null, [11, 0], [11, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/page-title", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/page-title.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "title", ["loc", [null, [1, 0], [1, 9]]]], ["content", "yield", ["loc", [null, [1, 9], [1, 18]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/radio-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/radio-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 1, 1);
          morphs[3] = dom.createMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["ember-radio-button ", ["subexpr", "if", [["get", "checked", ["loc", [null, [2, 40], [2, 47]]]], "checked"], [], ["loc", [null, [2, 35], [2, 59]]]], " ", ["get", "joinedClassNames", ["loc", [null, [2, 62], [2, 78]]]]]]], ["attribute", "for", ["get", "radioId", ["loc", [null, [2, 88], [2, 95]]]]], ["inline", "radio-button-input", [], ["class", ["subexpr", "@mut", [["get", "radioClass", ["loc", [null, [4, 14], [4, 24]]]]], [], []], "id", ["subexpr", "@mut", [["get", "radioId", ["loc", [null, [5, 11], [5, 18]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [6, 17], [6, 25]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 13], [7, 17]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [8, 17], [8, 25]]]]], [], []], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [9, 19], [9, 29]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [10, 14], [10, 19]]]]], [], []], "changed", "changed"], ["loc", [null, [3, 4], [11, 27]]]], ["content", "yield", ["loc", [null, [13, 4], [13, 13]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 0
            },
            "end": {
              "line": 25,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/radio-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "radio-button-input", [], ["class", ["subexpr", "@mut", [["get", "radioClass", ["loc", [null, [17, 12], [17, 22]]]]], [], []], "id", ["subexpr", "@mut", [["get", "radioId", ["loc", [null, [18, 9], [18, 16]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [19, 15], [19, 23]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [20, 11], [20, 15]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [21, 15], [21, 23]]]]], [], []], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [22, 17], [22, 27]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [23, 12], [23, 17]]]]], [], []], "changed", "changed"], ["loc", [null, [16, 2], [24, 25]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/radio-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [25, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("dummy/templates/components/violations-grid-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/violations-grid-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "c-violations-grid-item__header");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        dom.setAttribute(el2, "class", "c-violations-grid-item__title u-align-center");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "c-violations-grid-item__body u-relative");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "c-violations-grid-item__body-content u-fill");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2, 1]), 2, 2);
        return morphs;
      },
      statements: [["content", "title", ["loc", [null, [2, 59], [2, 68]]]], ["content", "yield", ["loc", [null, [8, 4], [8, 13]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/x-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/x-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/x-div", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/x-div.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/x-image", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/x-image.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/x-paragraph", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/x-paragraph.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/x-text-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/x-text-input.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("input");
        dom.setAttribute(el1, "class", "c-text-input__input");
        dom.setAttribute(el1, "type", "text");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'id');
        morphs[1] = dom.createAttrMorph(element0, 'placeholder');
        morphs[2] = dom.createAttrMorph(element0, 'value');
        return morphs;
      },
      statements: [["attribute", "id", ["get", "id", ["loc", [null, [3, 7], [3, 9]]]]], ["attribute", "placeholder", ["get", "placeholder", ["loc", [null, [5, 16], [5, 27]]]]], ["attribute", "value", ["get", "value", ["loc", [null, [6, 10], [6, 15]]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/violations", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 77,
              "column": 4
            },
            "end": {
              "line": 85,
              "column": 4
            }
          },
          "moduleName": "dummy/templates/violations.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "x-button", [], ["id", "violations__empty-button", "data-test-selector", "empty-button", "axeViolationClassNames", "outline outline--red"], ["loc", [null, [79, 6], [83, 8]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 88,
              "column": 4
            },
            "end": {
              "line": 90,
              "column": 4
            }
          },
          "moduleName": "dummy/templates/violations.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "x-text-input", [], ["id", "violations__labeless-input", "data-test-selector", "labeless-text-input", "visualNoiseLevel", ["subexpr", "@mut", [["get", "model.currentNoiseLevel", ["loc", [null, [89, 111], [89, 134]]]]], [], []]], ["loc", [null, [89, 6], [89, 136]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.2",
            "loc": {
              "source": null,
              "start": {
                "line": 94,
                "column": 6
              },
              "end": {
                "line": 100,
                "column": 6
              }
            },
            "moduleName": "dummy/templates/violations.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          Swoooosh\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 93,
              "column": 4
            },
            "end": {
              "line": 101,
              "column": 4
            }
          },
          "moduleName": "dummy/templates/violations.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "x-paragraph", [], ["class", "p-violations__grid-item-content--low-contrast-text", "data-test-selector", "labeless-text-input", "id", "violations__low-contrast-text", "visualNoiseLevel", ["subexpr", "@mut", [["get", "model.currentNoiseLevel", ["loc", [null, [98, 25], [98, 48]]]]], [], []]], 0, null, ["loc", [null, [94, 6], [100, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.2",
            "loc": {
              "source": null,
              "start": {
                "line": 105,
                "column": 6
              },
              "end": {
                "line": 107,
                "column": 6
              }
            },
            "moduleName": "dummy/templates/violations.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        Friends don't let friends use ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("code");
            var el2 = dom.createTextNode("<blink> tags");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(", ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("blink");
            var el2 = dom.createTextNode("like this one!");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 104,
              "column": 4
            },
            "end": {
              "line": 108,
              "column": 4
            }
          },
          "moduleName": "dummy/templates/violations.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "x-paragraph", [], ["id", "violations__non-standard-html", "data-test-selector", "paragraph-with-blink-tag", "visualNoiseLevel", ["subexpr", "@mut", [["get", "model.currentNoiseLevel", ["loc", [null, [105, 119], [105, 142]]]]], [], []]], 0, null, ["loc", [null, [105, 6], [107, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 111,
              "column": 4
            },
            "end": {
              "line": 113,
              "column": 4
            }
          },
          "moduleName": "dummy/templates/violations.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "x-image", [], ["class", "u-fill", "id", "violations__img-without-alt", "src", "assets/img/empire-state-building-moonlight.png", "visualNoiseLevel", ["subexpr", "@mut", [["get", "model.currentNoiseLevel", ["loc", [null, [112, 134], [112, 157]]]]], [], []]], ["loc", [null, [112, 6], [112, 159]]]]],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 116,
              "column": 4
            },
            "end": {
              "line": 139,
              "column": 4
            }
          },
          "moduleName": "dummy/templates/violations.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "p-violations__grid-item-content--radio-items");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          dom.setAttribute(el2, "class", "u-fill-width u-align-center p-violations__grid-item-content--radio");
          dom.setAttribute(el2, "for", "violations__radio-group-items--strawberries");
          var el3 = dom.createTextNode("\n          Strawberries\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          dom.setAttribute(el2, "class", "u-fill-width u-align-center p-violations__grid-item-content--radio");
          dom.setAttribute(el2, "for", "violations__radio-group-items--blueberries");
          var el3 = dom.createTextNode("\n          Blueberries\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          dom.setAttribute(el2, "class", "u-fill-width u-align-center p-violations__grid-item-content--radio");
          dom.setAttribute(el2, "for", "violations__radio-group-items--raspberries");
          var el3 = dom.createTextNode("\n          Raspberries\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [2]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
          return morphs;
        },
        statements: [["inline", "radio-button", [], ["name", "fruits", "value", "Strawberries", "radioId", "violations__radio-group-items--strawberries", "visualNoiseLevel", ["subexpr", "@mut", [["get", "model.currentNoiseLevel", ["loc", [null, [125, 131], [125, 154]]]]], [], []]], ["loc", [null, [125, 10], [125, 156]]]], ["inline", "radio-button", [], ["name", "fruits", "value", "Blueberries", "radioId", "violations__radio-group-items--blueberries", "visualNoiseLevel", ["subexpr", "@mut", [["get", "model.currentNoiseLevel", ["loc", [null, [130, 129], [130, 152]]]]], [], []]], ["loc", [null, [130, 10], [130, 154]]]], ["inline", "radio-button", [], ["name", "fruits", "value", "Raspberries", "radioId", "violations__radio-group-items--raspberries", "visualNoiseLevel", ["subexpr", "@mut", [["get", "model.currentNoiseLevel", ["loc", [null, [135, 129], [135, 152]]]]], [], []]], ["loc", [null, [135, 10], [135, 154]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 149,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/violations.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        dom.setAttribute(el1, "class", "p-violations__header");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "p-violations__header-hint");
        var el3 = dom.createTextNode("*Open your developer console to view violation logging");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "p-violations__noise-selectors");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("fieldset");
        dom.setAttribute(el2, "class", "c-radio-track u-align-center u-relative");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("legend");
        dom.setAttribute(el3, "class", "c-radio-track__heading");
        var el4 = dom.createTextNode("Visual Noise Level");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3, "class", "c-radio-track__line");
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4, "for", "noise-level-0");
        dom.setAttribute(el4, "class", "c-radio-track__radio-item");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "c-radio-track__item-node");
        var el6 = dom.createTextNode("None");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "c-radio-track__item-pointer");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4, "for", "noise-level-1");
        dom.setAttribute(el4, "class", "c-radio-track__radio-item");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "c-radio-track__item-node");
        var el6 = dom.createTextNode("Level 1");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "c-radio-track__item-pointer");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4, "for", "noise-level-2");
        dom.setAttribute(el4, "class", "c-radio-track__radio-item");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "c-radio-track__item-node");
        var el6 = dom.createTextNode("Level 2");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "c-radio-track__item-pointer");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4, "for", "noise-level-3");
        dom.setAttribute(el4, "class", "c-radio-track__radio-item");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "c-radio-track__item-node");
        var el6 = dom.createTextNode("Level 3");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "c-radio-track__item-pointer");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "p-violations__body u-fill-width u-relative");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2, "class", "p-violations__grid u-fill-width u-relative");
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("footer");
        dom.setAttribute(el1, "class", "p-violations__footer");
        var el2 = dom.createTextNode("\n  For more on ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("strong");
        var el3 = dom.createTextNode("accessible");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" user interface patterns, check out\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "https://ember-a11y.github.io/a11y-demo-app/");
        var el3 = dom.createTextNode("Ember A11y's best-practices demo app");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [2, 1, 3]);
        var element2 = dom.childAt(fragment, [5, 1]);
        var morphs = new Array(11);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [5]), 1, 1);
        morphs[4] = dom.createMorphAt(dom.childAt(element1, [7]), 1, 1);
        morphs[5] = dom.createMorphAt(element2, 1, 1);
        morphs[6] = dom.createMorphAt(element2, 3, 3);
        morphs[7] = dom.createMorphAt(element2, 5, 5);
        morphs[8] = dom.createMorphAt(element2, 7, 7);
        morphs[9] = dom.createMorphAt(element2, 9, 9);
        morphs[10] = dom.createMorphAt(element2, 11, 11);
        return morphs;
      },
      statements: [["inline", "page-title", [], ["title", "Violations", "data-test-selector", "violations-page__passing-component"], ["loc", [null, [2, 2], [2, 91]]]], ["inline", "radio-button", [], ["groupValue", ["subexpr", "@mut", [["get", "model.currentNoiseLevel", ["loc", [null, [15, 21], [15, 44]]]]], [], []], "value", 0, "name", "noise-level", "radioClass", "c-radio-track__item-input", "radioId", "noise-level-0", "changed", "updateCurrentNoiseLevel"], ["loc", [null, [14, 8], [21, 10]]]], ["inline", "radio-button", [], ["groupValue", ["subexpr", "@mut", [["get", "model.currentNoiseLevel", ["loc", [null, [28, 21], [28, 44]]]]], [], []], "value", 1, "radioClass", "c-radio-track__item-input", "name", "noise-level", "radioId", "noise-level-1", "changed", "updateCurrentNoiseLevel"], ["loc", [null, [27, 8], [34, 10]]]], ["inline", "radio-button", [], ["groupValue", ["subexpr", "@mut", [["get", "model.currentNoiseLevel", ["loc", [null, [41, 21], [41, 44]]]]], [], []], "value", 2, "name", "noise-level", "radioClass", "c-radio-track__item-input", "radioId", "noise-level-2", "changed", "updateCurrentNoiseLevel"], ["loc", [null, [40, 8], [47, 10]]]], ["inline", "radio-button", [], ["groupValue", ["subexpr", "@mut", [["get", "model.currentNoiseLevel", ["loc", [null, [54, 21], [54, 44]]]]], [], []], "value", 3, "name", "noise-level", "radioClass", "c-radio-track__item-input", "radioId", "noise-level-3", "changed", "updateCurrentNoiseLevel"], ["loc", [null, [53, 8], [60, 10]]]], ["block", "violations-grid-item", [], ["class", "p-violations__grid-item", "title", "Button without title"], 0, null, ["loc", [null, [77, 4], [85, 29]]]], ["block", "violations-grid-item", [], ["class", "p-violations__grid-item", "title", "Input without label"], 1, null, ["loc", [null, [88, 4], [90, 29]]]], ["block", "violations-grid-item", [], ["class", "p-violations__grid-item", "title", "Poorly Contrasting Text Color"], 2, null, ["loc", [null, [93, 4], [101, 29]]]], ["block", "violations-grid-item", [], ["class", "p-violations__grid-item", "title", "Non-standard HTML elements"], 3, null, ["loc", [null, [104, 4], [108, 29]]]], ["block", "violations-grid-item", [], ["class", "p-violations__grid-item", "title", "<img> Tags without `alt` attributes"], 4, null, ["loc", [null, [111, 4], [113, 29]]]], ["block", "violations-grid-item", [], ["class", "p-violations__grid-item", "title", "Ungrouped radio inputs with a shared name"], 5, null, ["loc", [null, [116, 4], [139, 29]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5]
    };
  })());
});
define('dummy/transitions', ['exports'], function (exports) {
  exports['default'] = a11yTransitions;

  function a11yTransitions() {

    this.transition(this.fromRoute('violations.level-1'), this.toRoute('violations.level-2'), this.use('toLeft'), this.reverse('toRight'));
  }
});
define('dummy/transitions/cross-fade', ['exports', 'liquid-fire/transitions/cross-fade'], function (exports, _liquidFireTransitionsCrossFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsCrossFade['default'];
    }
  });
});
define('dummy/transitions/default', ['exports', 'liquid-fire/transitions/default'], function (exports, _liquidFireTransitionsDefault) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsDefault['default'];
    }
  });
});
define('dummy/transitions/explode', ['exports', 'liquid-fire/transitions/explode'], function (exports, _liquidFireTransitionsExplode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsExplode['default'];
    }
  });
});
define('dummy/transitions/fade', ['exports', 'liquid-fire/transitions/fade'], function (exports, _liquidFireTransitionsFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFade['default'];
    }
  });
});
define('dummy/transitions/flex-grow', ['exports', 'liquid-fire/transitions/flex-grow'], function (exports, _liquidFireTransitionsFlexGrow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlexGrow['default'];
    }
  });
});
define('dummy/transitions/fly-to', ['exports', 'liquid-fire/transitions/fly-to'], function (exports, _liquidFireTransitionsFlyTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlyTo['default'];
    }
  });
});
define('dummy/transitions/move-over', ['exports', 'liquid-fire/transitions/move-over'], function (exports, _liquidFireTransitionsMoveOver) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsMoveOver['default'];
    }
  });
});
define('dummy/transitions/scale', ['exports', 'liquid-fire/transitions/scale'], function (exports, _liquidFireTransitionsScale) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScale['default'];
    }
  });
});
define('dummy/transitions/scroll-then', ['exports', 'liquid-fire/transitions/scroll-then'], function (exports, _liquidFireTransitionsScrollThen) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScrollThen['default'];
    }
  });
});
define('dummy/transitions/to-down', ['exports', 'liquid-fire/transitions/to-down'], function (exports, _liquidFireTransitionsToDown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToDown['default'];
    }
  });
});
define('dummy/transitions/to-left', ['exports', 'liquid-fire/transitions/to-left'], function (exports, _liquidFireTransitionsToLeft) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToLeft['default'];
    }
  });
});
define('dummy/transitions/to-right', ['exports', 'liquid-fire/transitions/to-right'], function (exports, _liquidFireTransitionsToRight) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToRight['default'];
    }
  });
});
define('dummy/transitions/to-up', ['exports', 'liquid-fire/transitions/to-up'], function (exports, _liquidFireTransitionsToUp) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToUp['default'];
    }
  });
});
define('dummy/transitions/wait', ['exports', 'liquid-fire/transitions/wait'], function (exports, _liquidFireTransitionsWait) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsWait['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("dummy/app")["default"].create({"name":"ember-a11y-testing","version":"0.1.5+d19e0e50"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map