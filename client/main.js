import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Router } from 'meteor/iron:router'
import { GoogleMaps } from 'meteor/dburles:google-maps';

import './main.html';

import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';


// Required AutoForm setup
SimpleSchema.extendOptions(['autoform']);

GoogleMaps.load();


Template.Contact.helpers({
    exampleMapOptions: function() {
      // Make sure the maps API has loaded
      if (GoogleMaps.loaded()) {
        // Map initialization options
        return {
          center: new google.maps.LatLng(-37.8136, 144.9631),
          zoom: 8
        };
      }
    }
  });

  Template.Contact.onCreated(function() {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('exampleMap', function(map) {
      // Add a marker to the map once it's ready
      var marker = new google.maps.Marker({
        position: map.options.center,
        map: map.instance
      });
    });
  });