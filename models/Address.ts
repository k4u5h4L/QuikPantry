import mongoose from "mongoose";

/* productSchema will correspond to a collection in your MongoDB database. */
const AddressSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true,
    },
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    town: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    notes: {
        type: String,
    },
});

export { AddressSchema };

export default mongoose.models.Address ||
    mongoose.model("Address", AddressSchema);
