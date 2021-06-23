import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

import dbConnect from "@/utils/dbConnect";
import Product from "@/models/Product";
import Order from "@/models/Order";
import { sendRegex } from "@/helpers/getRegex";
import { ProductType } from "@/types/index";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    // get the session from the user
    const session = await getSession({ req });

    // stop executing and say the user is not authenticated
    if (!session) {
        res.status(404).json({ message: "User is not authenticated" });
        return;
    }

    // check if the HTTP method is GET, else return no
    if (req.method === "GET") {
        try {
            // connect to the database
            await dbConnect();

            // find the ordered products based on the email of the user
            const products = await Order.findOne({
                email: session.user.email,
            });

            // finding all the tags of the products the user has bought so far
            let tags = [];
            products.productsBought.forEach((pdt) => {
                tags.push(...pdt.tags);
            });

            // constructing a RegExp, querying for the products based on older purchases
            const relatedProducts: ProductType[] = await Product.find({
                tags: sendRegex(tags),
            });

            // console.log(relatedProducts);

            // returning the products
            res.status(200).json(relatedProducts);

            // res.status(200).json({ message: "Everything was fine" });
        } catch (err: any) {
            res.status(500).json({ message: "Something went wrong" });
            console.error(err);
        }
    } else {
        res.status(404).json({ message: "route or method is incorrect" });
    }
};
