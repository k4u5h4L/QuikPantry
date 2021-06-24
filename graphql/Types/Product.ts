import { objectType } from "nexus";

const Review = objectType({
    name: "Review",
    definition(t) {
        t.string("user");
        t.int("rating");
        t.string("title");
        t.string("desc");
        t.string("date");
    },
});

export const Product = objectType({
    name: "Product",
    definition(t) {
        t.string("_id");
        t.string("name");
        t.string("desc");
        t.int("oldPrice");
        t.int("price");
        t.int("rating");
        t.string("imageUrl");
        t.boolean("stock");
        t.list.string("tags");
        t.list.field("reviews", {
            type: Review,
        });
    },
});
