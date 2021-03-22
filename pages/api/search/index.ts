import { NextApiRequest, NextApiResponse } from "next";

import dbConnect from "@/utils/dbConnect";
import Product from "@/models/Product";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        try {
            await dbConnect();

            const search: string = req.body;
            console.log(search);

            const products = await Product.find({
                name: new RegExp(`${search}`, "i"),
                tags: new RegExp(`${search}`, "i"),
            });
            // console.log(products);

            res.status(200).json(products);
            // res.status(200).json({ message: "Everything was fine" });
        } catch (err: any) {
            res.status(500).json({ message: "POST data is incorrect" });
        }
    } else {
        res.status(404).json({ message: "route or method is incorrect" });
    }
};
