import { Meteor } from 'meteor/meteor';
import { GoogleMaps } from 'meteor/dburles:google-maps';
import { Tracker } from 'meteor/tracker';

Meteor.startup(() => {
  // code to run on server at startup
	GoogleMaps.load();
});