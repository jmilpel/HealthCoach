Schema = {};

Schema.contactFormSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Your name",
        max: 50
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "E-mail address"
    },
    telephone: {
        type: Number,
        label: "Telefono",
        max: 50
    },
    city: {
        type: String,
        label: "Población",
        max: 50
    },
    message: {
        type: String,
        label: "Message",
        max: 1000
    }
}, { tracker: Tracker });