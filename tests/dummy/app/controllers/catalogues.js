import TreeViewController from 'ember-cli-admin/mixins/controllers/tree-view';
import Ember from 'ember';
var cataloguesController;

cataloguesController = Ember.Controller.extend(TreeViewController, {
  formAttributes: ['name']
});

export default cataloguesController;
