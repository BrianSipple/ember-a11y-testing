import BaseDemoComponent from './_base-demo-component';

export default BaseDemoComponent.extend({
  actions: {
    toggle() {
      this.set('isFailing', true);
    }
  }
});
