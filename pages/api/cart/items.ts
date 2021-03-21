import { NextApiRequest, NextApiResponse } from "next";

import dbConnect from "@/utils/dbConnect";
import Product from "@/models/Product";
import mongoose from "mongoose";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        try {
            await dbConnect();

            const idArray: string[] = JSON.parse(req.body);

            /* prettier-ignore */
            const products = await Product.find({
                '_id': { $in: idArray.map((id, i) => mongoose.Types.ObjectId(id)) },
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
