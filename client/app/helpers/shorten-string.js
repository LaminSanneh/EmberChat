import Ember from 'ember';

export function shortenString(params/*, hash*/) {
  return params[0].substring(0, 200);
}

export default Ember.HTMLBars.makeBoundHelper(shortenString);
