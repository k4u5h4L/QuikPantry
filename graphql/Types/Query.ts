import { queryType, idArg } from "nexus";
import { AuthenticationError } from "apollo-server-micro";

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
            resolve: async (_root, { email }: { email: string }, ctx) => {
                await dbConnect();

                if (ctx.session) {
                    if (ctx.session.user.email == email) {
                        const address = await Address.findOne({ email: email });

                        return address;
                    }
                } else {
                    throw new AuthenticationError("User is not logged in.");
                }
            },
        });

        t.field("OrderByEmail", {
            type: UserOrder,
            description:
                "All orders done by a user of a particular email for recommendation system",
            args: { email: idArg() },
            resolve: async (_root, { email }: { email: string }, ctx) => {
                await dbConnect();

                if (ctx.session) {
                    if (ctx.session.user.email == email) {
                        const address = await Order.findOne({ email: email });

                        return address;
                    }
                } else {
                    throw new AuthenticationError("User is not logged in.");
                }

                // const or = await new Order({
                //     email: "kaushal.v.bhat@gmail.com",
                //     productsBought: [
                //         {
                //             productName: "Pineapples",
                //             rating: "3",
                //             tags: ["pineapple", "fruit", "sweet"],
                //         },
                //         {
                //             productName: "Jellybeans",
                //             rating: "5",
                //             tags: ["beans", "jelly", "snack"],
                //         },
                //     ],
                // });

                // or.save();
            },
        });
    },
});
