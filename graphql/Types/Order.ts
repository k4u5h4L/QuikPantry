import { objectType } from "nexus";

const ProductsBought = objectType({
    name: "ProductsBought",
    definition(t) {
        t.string("productName");
        t.int("rating");
        t.list.string("tags");
    },
});

export const Order = objectType({
    name: "Order",
    definition(t) {
        t.string("email");
        t.list.field("productsBought", {
            type: ProductsBought,
        });
    },
});
