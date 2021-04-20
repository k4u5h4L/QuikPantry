import { queryType, idArg } from "nexus";

import { Address as ContactAddress } from "./index";
import dbConnect from "@/utils/dbConnect";
import Address from "@/models/Address";

export const Query = queryType({
    definition(t) {
        t.field("AddressByEmail", {
            type: ContactAddress,
            description:
                "Find an address by its corresponding email of the user",
            args: { email: idArg() },
            resolve: async (_root, { email }: { email: string }, _ctx) => {
                await dbConnect();

                const address = await Address.findOne({ email: email });

                return address;
            },
        });
    },
});
