import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | empty-route', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:empty-route');
    assert.ok(route);
  });
});
