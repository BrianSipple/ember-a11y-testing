import Ember from 'ember';
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import sinon from 'sinon';

let actual, expected, sandbox;

const IDs = {
  emptyButton: '#empty-button',
  sloppyInput: '#sloppy-input'
};

const findBy = (items, key, val) => items.find(item => item[key] === val);

moduleForAcceptance('Acceptance | violations', {
  beforeEach() {
    sandbox = sinon.sandbox.create();
  },

  afterEach() {
    sandbox.restore();
  }
});

test('marking DOM nodes with violations', function(assert) {

  sandbox.stub(axe.ember, 'a11yCheckCallback', function (results) {
    console.log('Results****', results.violations.find);
    assert.equal(results.violations.length, 2);

    const buttonNameViolation = findBy(results.violations, 'id', 'button-name');
    assert.equal(buttonNameViolation.nodes[0].target[0], IDs.emptyButton);

  });

  visit('/violations');

});
