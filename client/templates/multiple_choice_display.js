import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './multiple_choice_display.html';

Template.multiple_choice_display.onCreated(function scoreDisplayOnCreated() {
  this.score1 = new ReactiveVar(0);
  this.score2 = new ReactiveVar(0);
});

Template.multiple_choice_display.helpers({
  score1() {
    return Template.instance().score1.get();
  },
  score2() {
    return Template.instance().score2.get();
  },
});

Template.multiple_choice_display.events({
  'click .choices'(event, instance) {
  	// TODO: Only allowed to submit once
  	if (event.target.value == "South Park") {
	  	window.alert("You are right!!");
	    instance.score1.set(instance.score1.get() + 1);
	} else {
		window.alert("You are WRONG!!!!");
	}
  },
});
