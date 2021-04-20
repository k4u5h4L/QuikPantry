import { objectType } from "nexus";

export const Order = objectType({
    name: "Order",
    definition(t) {
        t.string("email");
        t.string("productName");
        t.int("rating");
        t.list.string("tags");
    },
});
