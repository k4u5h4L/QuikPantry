import mongoose from "mongoose";

/* productSchema will correspond to a collection in your MongoDB database. */
const OrderSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    // productName: {
    //     type: String,
    //     required: true,
    // },
    // rating: {
    //     type: Number,
    // },
    // tags: { type: Array },
    productsBought: {
        type: Array,
    },
});

export { OrderSchema };

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
