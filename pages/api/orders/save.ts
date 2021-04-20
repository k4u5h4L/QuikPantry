import { NextApiRequest, NextApiResponse } from "next";

import dbConnect from "@/utils/dbConnect";
import { ProductType, OrderType, AddressType } from "@/types/index";
import Order from "@/models/Order";
import Address from "@/models/Address";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        try {
            await dbConnect();

            const { items, email, address } = req.body;

            const pdtsBought = items.map(
                (item: ProductType, index: number) => ({
                    productName: item.name,
                    rating: item.rating,
                    tags: item.tags,
                })
            );

            let order: OrderType = await Order.findOne({ email: email });

            order.productsBought.push(...pdtsBought);

            const updateOrders = await Order.findOneAndUpdate(
                { email: email },
                { ...order }
            );

            // so far was updating the orders coll. now we need to update the address

            let addr = await Address.findOneAndUpdate(
                { email: email },
                { ...address }
            );

            res.status(200).json({ message: "Orders and address updated" });
        } catch (err: any) {
            console.log(err);

            res.status(500).json({ message: "POST data is incorrect" });
        }
    } else {
        res.status(404).json({ message: "route or method is incorrect" });
    }
};
