import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | example/empty', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:example/empty');
    assert.ok(route);
  });
});
