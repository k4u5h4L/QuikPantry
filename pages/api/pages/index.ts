import { NextApiRequest, NextApiResponse } from "next";

import dbConnect from "@/utils/dbConnect";
import Product from "@/models/Product";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        try {
            await dbConnect();

            // const pdts: ProductType[] = await Product.find({});
            const pages: number = await Product.countDocuments({});

            res.status(200).json({
                totalPages: parseInt((pages / 8).toFixed(0)),
            });
        } catch (err: any) {
            res.status(500).json({ message: "GET data is incorrect" });
        }
    } else {
        res.status(404).json({ message: "route or method is incorrect" });
    }
};
