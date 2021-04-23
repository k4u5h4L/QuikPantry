import { objectType } from "nexus";

export const Address = objectType({
    name: "Address",
    definition(t) {
        t.string("country");
        t.string("fname");
        t.string("lname");
        t.string("address");
        t.string("town");
        t.string("state");
        t.int("zip");
        t.string("email");
        t.int("phone");
        t.string("notes");
    },
});
