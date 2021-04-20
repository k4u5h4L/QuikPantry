import { queryType, idArg } from "nexus";

import { Address as ContactAddress, Order as UserOrder } from "./index";
import dbConnect from "@/utils/dbConnect";
import Address from "@/models/Address";
import Order from "@/models/Order";

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

        t.field("OrderByEmail", {
            type: UserOrder,
            description:
                "All orders done by a user of a particular email for recommendation system",
            args: { email: idArg() },
            resolve: async (_root, { email }: { email: string }, _ctx) => {
                await dbConnect();

                const order = await Order.findOne({ email: email });

                // const or = await new Order({
                //     email: "kaushal.v.bhat@gmail.com",
                //     productName: "Pineapples",
                //     rating: "3",
                //     tags: ["pineapple", "fruit", "sweet"],
                // });

                // or.save();

                return order;
            },
        });
    },
});
