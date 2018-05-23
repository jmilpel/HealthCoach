import { Meteor } from 'meteor/meteor';
import { GoogleMaps } from 'meteor/dburles:google-maps';
import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Meteor.startup(() => {
  // code to run on server at startup
	//GoogleMaps.load();
});


Meteor.methods({
  sendEmail: function(doc) {
    // Important server-side check for security and data integrity
    check(doc, Schema.contactFormSchema);

    // Build the e-mail text
    var text = "Nombre: " + doc.name + "\n\n"
            + "Email: " + doc.email + "\n\n\n\n"
            + "Telefono: " + doc.telephone + "\n\n\n\n"
            + "Poblacion: " + doc.city + "\n\n\n\n"
            + doc.message;

    this.unblock();

    // Send the e-mail
    Email.send({
        to: "jmilpel@gmail.com",
        from: doc.email,
        subject: "Formulario de contacto de " + doc.name,
        text: text
    });
  }
});