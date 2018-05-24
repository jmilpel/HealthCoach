import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Router } from 'meteor/iron:router'
import { GoogleMaps } from 'meteor/dburles:google-maps';
import { Mongo } from 'meteor/mongo';
// Required AutoForm setup
import SimpleSchema from 'simpl-schema';
//import SimpleSchema from 'meteor/aldeed:simple-schema';
SimpleSchema.extendOptions(['autoform']);
import { Tracker } from 'meteor/tracker';

GoogleMaps.load();


document.getElementById("plus-img").addEventListener("mouseover", mouseOver);
document.getElementById("plus-img").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("plus-img").style.display = "visible";
}

function mouseOut() {
    document.getElementById("plus-img").style.display = "none";
}



//Definición de los helpers
Template.Contact.helpers({
    healthMapOptions: function() {
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

Template.contactForm.helpers({
  contactForm: function() {
    return Schema.contactForm;
  }
});



Template.Contact.onCreated(function() {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('healthMap', function(map) {
      // Add a marker to the map once it's ready
      var marker = new google.maps.Marker({
        position: map.options.center,
        map: map.instance
      });
    });
  });


