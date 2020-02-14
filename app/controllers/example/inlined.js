import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.components = Array(30).fill(0);
  }
});
