import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Router } from 'meteor/iron:router'
import { GoogleMaps } from 'meteor/dburles:google-maps';

//import './main.html';

// Required AutoForm setup
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
import { Tracker } from 'meteor/tracker';

GoogleMaps.load();


Template.Contact.helpers({
    exampleMapOptions: function() {
      // Make sure the maps API has loaded
      if (GoogleMaps.loaded()) {
        // Map initialization options
        return {
          center: new google.maps.LatLng(19.436768, -99.187202),
          zoom: 16
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


Books = new Mongo.Collection("books");
Books.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Nombre y apellidos",
    max: 200
  },
  email: {
    type: String,
    label: "Email"
  },
  telephone: {
    type: Number,
    label: "Teléfono",
    min: 0
  },
  city: {
    type: String,
    label: "Población",
    optional: true
  },
  query: {
    type: String,
    label: "Dudas y consultas",
    max: 1000
  }
}, { tracker: Tracker }));