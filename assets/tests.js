define('dummy/tests/acceptance/auto-run-test', ['exports', 'ember', 'qunit', 'dummy/tests/helpers/start-app', 'sinon'], function (exports, _ember, _qunit, _dummyTestsHelpersStartApp, _sinon) {
  var run = _ember['default'].run;

  var SELECTORS = {
    passingComponent: '[data-test-selector="violations-page__passing-component"]'
  };

  var application = undefined;
  var sandbox = undefined;

  (0, _qunit.module)('Acceptance | auto-run', {
    beforeEach: function beforeEach() {
      application = (0, _dummyTestsHelpersStartApp['default'])();
      sandbox = _sinon['default'].sandbox.create();
    },

    afterEach: function afterEach() {
      sandbox.restore();
      _ember['default'].run(application, 'destroy');
    }
  });

  (0, _qunit.test)('should run the function when visiting a new route', function (assert) {
    var callbackStub = sandbox.stub(run.backburner.options.render, 'after');

    visit('/');

    andThen(function () {
      assert.ok(callbackStub.calledOnce);
      assert.equal(currentPath(), 'violations');
    });
  });

  (0, _qunit.test)('should run the function whenever a render occurs', function (assert) {
    var callbackStub = sandbox.stub(run.backburner.options.render, 'after');

    visit('/').then(function () {

      assert.ok(callbackStub.calledOnce);
      assert.equal(currentPath(), 'violations');

      click('' + SELECTORS.passingComponent);

      andThen(function () {
        assert.ok(callbackStub.calledTwice);
      });
    });
  });
});
define('dummy/tests/acceptance/auto-run-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | acceptance/auto-run-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/auto-run-test.js should pass jshint.');
  });
});
define('dummy/tests/acceptance/violations-test', ['exports', 'qunit', 'dummy/tests/helpers/module-for-acceptance', 'sinon'], function (exports, _qunit, _dummyTestsHelpersModuleForAcceptance, _sinon) {

  /*
   * Violation selectors reported by axe in its violations results
   * 🔊 NOTE: These are deliberatly sorted A-Z, as haven't yet figured out
   * where axes gets its ordering from (it doesn't appear to be DOM order)
   */
  var VIOLATION_SELECTORS = ["#violations__empty-button", "#violations__img-without-alt", "#violations__labeless-input", "#violations__low-contrast-text", "#violations__non-standard-html > blink", "#violations__radio-group-items--strawberries"];

  var actual = undefined,
      expected = undefined,
      sandbox = undefined;

  (0, _dummyTestsHelpersModuleForAcceptance['default'])('Acceptance | violations', {
    beforeEach: function beforeEach() {
      sandbox = _sinon['default'].sandbox.create();
    },

    afterEach: function afterEach() {
      sandbox.restore();
    }
  });

  (0, _qunit.test)('marking DOM nodes with violations', function (assert) {

    sandbox.stub(axe.ember, 'a11yCheckCallback', function (results) {
      expected = VIOLATION_SELECTORS.length;
      actual = results.violations.length;

      assert.equal(actual, expected);

      expected = VIOLATION_SELECTORS;
      actual = results.violations.map(function (violation) {
        return violation.nodes;
      }).map(function (node) {
        return node[0].target[0];
      }).sort(function (a, b) {
        // descending (A-Z) order (NOTE: We need explicit numeric returns here to please Phantom (https://github.com/ariya/phantomjs/issues/11090)
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        }

        return 0;
      });

      assert.deepEqual(actual, expected);
    });

    visit('/');
  });
});
define('dummy/tests/acceptance/violations-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | acceptance/violations-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/violations-test.js should pass jshint.');
  });
});
define('dummy/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('dummy/tests/components/page-title.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/page-title.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/page-title.js should pass jshint.');
  });
});
define('dummy/tests/components/passing-component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/passing-component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/passing-component.js should pass jshint.');
  });
});
define('dummy/tests/components/violations-grid-item.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/violations-grid-item.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/violations-grid-item.js should pass jshint.');
  });
});
define('dummy/tests/components/x-button.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/x-button.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-button.js should pass jshint.');
  });
});
define('dummy/tests/components/x-div.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/x-div.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-div.js should pass jshint.');
  });
});
define('dummy/tests/components/x-image.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/x-image.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-image.js should pass jshint.');
  });
});
define('dummy/tests/components/x-paragraph.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/x-paragraph.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-paragraph.js should pass jshint.');
  });
});
define('dummy/tests/components/x-text-input.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/x-text-input.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-text-input.js should pass jshint.');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('dummy/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _dummyTestsHelpersStartApp, _dummyTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _dummyTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _dummyTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('dummy/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _dummyResolver, _dummyConfigEnvironment) {

  var resolver = _dummyResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('dummy/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _dummyApp, _dummyConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _dummyConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _dummyApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('dummy/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('dummy/tests/initializers/component-data-attributes.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/component-data-attributes.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/component-data-attributes.js should pass jshint.');
  });
});
define('dummy/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('dummy/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('dummy/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('dummy/tests/routes/violations.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/violations.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/violations.js should pass jshint.');
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-qunit'], function (exports, _dummyTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_dummyTestsHelpersResolver['default']);
});
define('dummy/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('dummy/tests/transitions.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | transitions.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transitions.js should pass jshint.');
  });
});
define('dummy/tests/unit/instance-initializers/axe-component-test', ['exports', 'ember', 'dummy/instance-initializers/axe-component', 'qunit'], function (exports, _ember, _dummyInstanceInitializersAxeComponent, _qunit) {
  var Application = _ember['default'].Application;
  var Component = _ember['default'].Component;
  var Logger = _ember['default'].Logger;
  var run = _ember['default'].run;

  var ID_TEST_DOM_NODE = 'sign-up-button';

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

  var application = undefined;
  var sandbox = undefined;

  function setupDOMNode() {
    var id = arguments.length <= 0 || arguments[0] === undefined ? ID_TEST_DOM_NODE : arguments[0];
    var tagName = arguments.length <= 1 || arguments[1] === undefined ? 'div' : arguments[1];

    var node = document.createElement(tagName);

    node.setAttribute('id', id);
    document.body.appendChild(node);

    return node;
  }

  function stubA11yCheck(sandbox, callbackPayload) {
    sandbox.stub(axe, 'a11yCheck', function (el, options, callback) {
      callback(callbackPayload);
    });
  }

  function stubViolationOnDOMNode(sandbox, selector) {
    stubA11yCheck(sandbox, {
      violations: [{
        name: 'test',
        nodes: [{ target: [selector] }]
      }]
    });
  }

  (0, _qunit.module)('Unit | Instance Initializer | axe-component', {
    beforeEach: function beforeEach() {
      run(function () {
        application = Application.create({
          rootElement: '#ember-testing'
        });
        application.deferReadiness();
      });

      sandbox = sinon.sandbox.create();
    },

    afterEach: function afterEach() {
      sandbox.restore();
    }
  });

  /* Basic Behavior */

  (0, _qunit.test)('initializer should not re-open Component more than once', function (assert) {
    // Depending on if the initializer has already ran, we will either expect the
    // reopen method to be called once or not at all.
    var assertMethod = Component.prototype.audit ? 'notCalled' : 'calledOnce';
    var reopenSpy = sandbox.spy(Component, 'reopen');

    (0, _dummyInstanceInitializersAxeComponent.initialize)(application);
    (0, _dummyInstanceInitializersAxeComponent.initialize)(application);

    assert.ok(reopenSpy[assertMethod]);
  });

  (0, _qunit.test)('audit is run on didRender when not in testing mode', function (assert) {
    (0, _dummyInstanceInitializersAxeComponent.initialize)(application);

    var component = Component.create({});
    var auditSpy = sandbox.spy(component, 'audit');

    // In order for the audit to run, we have to act like we're not in testing
    _ember['default'].testing = false;

    run(function () {
      return component.appendTo('#ember-testing');
    });
    assert.ok(auditSpy.calledOnce);

    run(function () {
      return component.trigger('didRender');
    });
    assert.ok(auditSpy.calledTwice);

    run(function () {
      return component.destroy();
    });

    // Turn testing mode back on to ensure validity of other tests
    _ember['default'].testing = true;
  });

  (0, _qunit.test)('audit is not run on didRender when in testing mode', function (assert) {
    (0, _dummyInstanceInitializersAxeComponent.initialize)(application);

    var component = Component.create({});
    var auditSpy = sandbox.spy(component, 'audit');

    run(function () {
      return component.appendTo('#ember-testing');
    });
    assert.ok(auditSpy.notCalled);

    run(function () {
      return component.destroy();
    });
  });

  /* Component.turnAuditOff */

  (0, _qunit.test)('turnAuditOff prevents audit from running on didRender', function (assert) {
    (0, _dummyInstanceInitializersAxeComponent.initialize)(application);

    var component = Component.create({ turnAuditOff: true });
    var auditSpy = sandbox.spy(component, 'audit');

    // In order for the audit to run, we have to act like we're not in testing
    _ember['default'].testing = false;

    run(function () {
      return component.appendTo('#ember-testing');
    });
    assert.ok(auditSpy.notCalled);

    run(function () {
      return component.destroy();
    });

    // Turn testing mode back on to ensure validity of other tests
    _ember['default'].testing = true;
  });

  /* Component.audit */

  (0, _qunit.test)('audit should log any violations found', function (assert) {
    stubA11yCheck(sandbox, {
      violations: [{
        name: 'test',
        nodes: []
      }]
    });

    var logSpy = sandbox.spy(Logger, 'error');
    var component = Component.create({});

    component.audit();

    assert.ok(logSpy.calledOnce);
  });

  (0, _qunit.test)('audit should do nothing if no violations found', function (assert) {
    stubA11yCheck(sandbox, { violations: [] });

    var logSpy = sandbox.spy(Logger, 'error');
    var component = Component.create({});

    component.audit();

    assert.ok(logSpy.notCalled);
  });

  /* Component.axeCallback */

  (0, _qunit.test)('axeCallback receives the results of the audit', function (assert) {
    var results = { violations: [] };
    var axeCallbackSpy = sandbox.spy();
    var component = Component.create({
      axeCallback: axeCallbackSpy
    });

    stubA11yCheck(sandbox, results);
    component.audit();

    assert.ok(axeCallbackSpy.calledOnce);
    assert.ok(axeCallbackSpy.calledWith(results));
  });

  (0, _qunit.test)('axeCallback throws an error if it is not a function', function (assert) {
    var results = { violations: [] };

    stubA11yCheck(sandbox, results);

    var component = Component.create({
      axeCallback: 'axeCallbackSpy'
    });

    assert.throws(function () {
      return component.audit();
    }, 'axeCallback should be a function.');
  });

  /* Component.axeOptions */

  (0, _qunit.test)('axeOptions are passed in as the second param to a11yCheck', function (assert) {
    var a11yCheckStub = sandbox.stub(axe, 'a11yCheck');

    var axeOptions = { test: 'test' };
    var component = Component.create({ axeOptions: axeOptions });
    component.audit();

    assert.ok(a11yCheckStub.calledOnce);
    assert.ok(a11yCheckStub.calledWith(component.$(), axeOptions));
  });

  (0, _qunit.test)('#violationClasses is computed from the current `visualNoiseLevel`', function (assert) {
    (0, _dummyInstanceInitializersAxeComponent.initialize)(application);

    stubViolationOnDOMNode(sandbox, '#' + ID_TEST_DOM_NODE);

    var dummyDOMNode = setupDOMNode(ID_TEST_DOM_NODE);
    var component = Component.create();

    [1, 2, 3].forEach(function (currentNoiseLevel) {
      run(function () {
        component.set('visualNoiseLevel', currentNoiseLevel);
      });

      component.audit();

      [1, 2, 3].forEach(function (_noiseLevel) {
        var assertFunc = _noiseLevel === currentNoiseLevel ? 'ok' : 'notOk';
        assert[assertFunc](dummyDOMNode.classList.contains(VIOLATION_CLASS_MAP['LEVEL_' + _noiseLevel], 'assert ' + assertFunc + ' for level ' + _noiseLevel));
      });
    });

    run(function () {
      return dummyDOMNode.remove();
    });
  });

  (0, _qunit.test)('`axeViolationClassNames` can be passed as a space-separated string (to aid template usage)', function (assert) {
    stubViolationOnDOMNode(sandbox, '#' + ID_TEST_DOM_NODE);

    var dummyDOMNode = setupDOMNode(ID_TEST_DOM_NODE);
    var component = Component.create({
      axeViolationClassNames: 'spark 🐋   foo  '
    });

    component.audit();

    assert.deepEqual([].slice.call(dummyDOMNode.classList), ['spark', '🐋', 'foo']);

    run(function () {
      return dummyDOMNode.remove();
    });
  });

  (0, _qunit.test)('#violationClasses will always give precedence to a `axeViolationClassNames`, if it is set', function (assert) {
    stubViolationOnDOMNode(sandbox, '#' + ID_TEST_DOM_NODE);

    var dummyDOMNode = setupDOMNode(ID_TEST_DOM_NODE);
    var axeViolationClassNames = ['a11y-tomster', 'a11y-zoey'];

    var component = Component.create({ axeViolationClassNames: axeViolationClassNames });

    component.audit();

    axeViolationClassNames.forEach(function (className) {
      assert.ok(dummyDOMNode.classList.contains(className));
    });

    [1, 2, 3].forEach(function (noiseLevel) {
      assert.notOk(dummyDOMNode.classList.contains(VIOLATION_CLASS_MAP['LEVEL_' + noiseLevel]));
    });

    run(function () {
      return dummyDOMNode.remove();
    });
  });

  (0, _qunit.test)('using default class names for violations when no `axeViolationClassNames` is provided', function (assert) {
    stubViolationOnDOMNode(sandbox, '#' + ID_TEST_DOM_NODE);

    var dummyDOMNode = setupDOMNode(ID_TEST_DOM_NODE);
    var component = Component.create();

    component.audit();

    assert.ok(dummyDOMNode.classList.contains(VIOLATION_CLASS_MAP.LEVEL_1));

    run(function () {
      return dummyDOMNode.remove();
    });
  });

  (0, _qunit.test)('smartly detects replaced elements and applies a special `border-box` style instead\nof the styles from the current setting', function (assert) {
    stubViolationOnDOMNode(sandbox, '#' + ID_TEST_DOM_NODE);

    var customViolationClass = 'foo';
    var dummyDOMNode = setupDOMNode(ID_TEST_DOM_NODE, 'img');
    var component = Component.create({ axeViolationClassNames: [customViolationClass] });

    component.audit();
    assert.ok(dummyDOMNode.classList.contains(VIOLATION_CLASS_MAP.REPLACED_ELEMENT));
    assert.notOk(dummyDOMNode.classList.contains(customViolationClass));
  });
});
/* global sinon, axe */
define('dummy/tests/unit/instance-initializers/axe-component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/instance-initializers/axe-component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/instance-initializers/axe-component-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/test-body-footer-test', ['exports', 'ember', 'qunit', 'sinon'], function (exports, _ember, _qunit, _sinon) {

  var sandbox = undefined;

  (0, _qunit.module)('Unit | test-body-footer', {
    beforeEach: function beforeEach() {
      sandbox = _sinon['default'].sandbox.create();
    },

    afterEach: function afterEach() {
      sandbox.restore();
    }
  });

  /* Registration */

  (0, _qunit.test)('appropriate callback functions have been registered', function (assert) {
    assert.ok(~QUnit.config.callbacks.done.indexOf(axe.ember.qunitDone));
    assert.ok(~QUnit.config.callbacks.moduleStart.indexOf(axe.ember.moduleStart));
  });

  /* axe.ember.a11yCheckCallback */

  (0, _qunit.test)('a11yCheckCallback shouldn\'t log anything if no violations', function (assert) {
    var loggerStub = sandbox.stub(_ember['default'].Logger, 'error');

    axe.ember.a11yCheckCallback({ violations: [] });

    assert.ok(loggerStub.notCalled);
  });

  (0, _qunit.test)('a11yCheckCallback should log any violations and throw an error', function (assert) {
    var loggerStub = sandbox.stub(_ember['default'].Logger, 'error');

    assert.throws(function () {
      axe.ember.a11yCheckCallback({ violations: [{}, {}] });
    }, 'The page should have no accessibility violations. Please check the developer console for more details.');

    assert.equal(loggerStub.callCount, 1, 'An error is thrown when there are violations');
  });

  /* axe.ember.afterRender */

  (0, _qunit.test)('afterRender should run a11yCheck and feed the results to callback', function (assert) {
    var a11yCheckStub = sandbox.stub(axe, 'a11yCheck');

    axe.ember.afterRender();

    assert.ok(a11yCheckStub.calledOnce);
    assert.ok(a11yCheckStub.calledWith('#ember-testing-container', undefined, axe.ember.a11yCheckCallback));
  });

  (0, _qunit.test)('afterRender should run a11yCheck with options and feed the results to callback', function (assert) {
    var a11yCheckStub = sandbox.stub(axe, 'a11yCheck');

    axe.ember.testOptions = {
      runOnly: {
        type: "tag",
        values: ["wcag2a"]
      }
    };

    axe.ember.afterRender();

    assert.ok(a11yCheckStub.calledOnce);
    assert.ok(a11yCheckStub.calledWith('#ember-testing-container', axe.ember.testOptions, axe.ember.a11yCheckCallback));

    axe.ember.testOptions = undefined;
  });

  /* axe.ember.moduleStart */

  (0, _qunit.test)('moduleStart turns axe on for acceptance tests', function (assert) {
    var turnAxeOnStub = sandbox.stub(axe.ember, 'turnAxeOn');

    axe.ember.moduleStart({ name: 'Acceptance | Some Test' });

    assert.ok(turnAxeOnStub.calledOnce);
  });

  (0, _qunit.test)('moduleStart turns axe off for non-acceptance tests', function (assert) {
    var turnAxeOffStub = sandbox.stub(axe.ember, 'turnAxeOff');

    axe.ember.moduleStart({ name: 'Unit | Some Test' });

    assert.ok(turnAxeOffStub.calledOnce);
  });

  /* axe.ember.qunitDone */

  (0, _qunit.test)('qunitDone turns axe off', function (assert) {
    var turnAxeOffStub = sandbox.stub(axe.ember, 'turnAxeOff');

    axe.ember.qunitDone();

    assert.ok(turnAxeOffStub.calledOnce);
  });

  /* axe.ember.turnAxeOn */

  (0, _qunit.test)('turnAxeOn enables axe tests on afterRender and adjusts the display', function (assert) {
    axe.ember.turnAxeOn();
    assert.ok(document.body.classList.contains('axe-enabled'));
    assert.ok(_ember['default'].run.backburner.options.render.after === axe.ember.afterRender);
  });

  /* axe.ember.turnAxeOff */
  (0, _qunit.test)('turnAxeOff disables axe tests on afterRender and resets the display', function (assert) {
    axe.ember.turnAxeOff();
    assert.ok(!document.body.classList.contains('axe-enabled'));
    assert.ok(_ember['default'].run.backburner.options.render.after === undefined);
  });
});
/* global QUnit, axe */
define('dummy/tests/unit/test-body-footer-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/test-body-footer-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/test-body-footer-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/utils/is-background-replaced-element-test', ['exports', 'ember-a11y-testing/utils/is-background-replaced-element', 'qunit'], function (exports, _emberA11yTestingUtilsIsBackgroundReplacedElement, _qunit) {

  var BACKGROUND_REPLACED_ELEMENTS = [{ tagName: 'VIDEO' }, { tagName: 'AUDIO' }, { tagName: 'OBJECT' }, { tagName: 'SOURCE' }, { tagName: 'IMG' }, { tagName: 'INPUT', type: 'radio' }, { tagName: 'INPUT', type: 'range' }];

  var STANDARD_ELEMENTS = [{ tagName: 'DIV' }, { tagName: 'LI' }, { tagName: 'A' }, { tagName: 'INPUT', type: 'text' }, { tagName: 'INPUT', type: 'number' }];

  function makeMessage(_ref, expected) {
    var tagName = _ref.tagName;
    var type = _ref.type;

    return 'Element with tagName "' + tagName + '" ' + (type ? 'with type "' + type + '" ' : '') + 'evaluates to ' + expected;
  }

  var expected = undefined,
      actual = undefined,
      message = undefined;

  (0, _qunit.module)('Unit | Utility | is replaced element');

  (0, _qunit.test)('it determines whether or not an HTMLElement is of the variety that will\nhave its background content be unstylable', function (assert) {

    BACKGROUND_REPLACED_ELEMENTS.forEach(function (element) {
      expected = true;
      actual = (0, _emberA11yTestingUtilsIsBackgroundReplacedElement['default'])(element);
      message = makeMessage(element, expected);

      assert.equal(actual, expected, message);
    });

    STANDARD_ELEMENTS.forEach(function (element) {
      expected = false;
      actual = (0, _emberA11yTestingUtilsIsBackgroundReplacedElement['default'])(element);
      message = makeMessage(element, expected);

      assert.equal(actual, expected, message);
    });
  });
});
define('dummy/tests/unit/utils/is-background-replaced-element-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/utils/is-background-replaced-element-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/is-background-replaced-element-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map