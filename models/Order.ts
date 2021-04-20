import mongoose from "mongoose";

/* productSchema will correspond to a collection in your MongoDB database. */
const OrderSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    product: {
        productName: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
        },
        tags: { type: Array },
    },
});

export { OrderSchema };

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
