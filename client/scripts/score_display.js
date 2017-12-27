import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './score_display.html';

Template.score_display.onCreated(function scoreDisplayOnCreated() {
  this.score1 = new ReactiveVar(0);
  this.score2 = new ReactiveVar(0);
});

Template.score_display.helpers({
  score1() {
    return Template.instance().score1.get();
  },
  score2() {
    return Template.instance().score2.get();
  },
});

Template.score_display.events({

});
