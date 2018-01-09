import Vue from 'vue'
import ssrMixin from './ssrmixin.js';

if (!Vue.globalsRegistered) {
  Vue.globalsRegistered = true;
  Vue.mixin(ssrMixin);
}
