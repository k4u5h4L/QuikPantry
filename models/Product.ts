import mongoose from "mongoose";

/* productSchema will correspond to a collection in your MongoDB database. */
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    oldPrice: {
        type: Number,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    stock: {
        type: Boolean,
    },
    tags: { type: Array },
    reviews: { type: Array },
});

export { ProductSchema };

export default mongoose.models.Product ||
    mongoose.model("Product", ProductSchema);
