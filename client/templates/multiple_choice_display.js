import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './multiple_choice_display.html';

Template.multiple_choice_display.onCreated(function scoreDisplayOnCreated() {
  this.score1 = new ReactiveVar(0);
  this.score2 = new ReactiveVar(0);
  this.hasVoted = new ReactiveVar(false);
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
  	if (instance.hasVoted.get()) {
  		window.alert("Already voted on this question, scrub.");
  		return;
  	}

  	if (event.target.value == "South Park") {
	  	window.alert("You are right!!");
	    instance.score1.set(instance.score1.get() + 1);
	} else {
		window.alert("You are WRONG!!!!");
	}

	instance.hasVoted.set(true);
  },
});
