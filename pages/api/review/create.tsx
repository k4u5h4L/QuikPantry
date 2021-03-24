import { NextApiRequest, NextApiResponse } from "next";

import dbConnect from "@/utils/dbConnect";
import Product from "@/models/Product";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        try {
            await dbConnect();

            console.log(req.body);

            res.status(200).json({ message: "Everything was fine" });
        } catch (err: any) {
            res.status(500).json({ message: "POST data is incorrect" });
        }
    } else {
        res.status(404).json({ message: "route or method is incorrect" });
    }
};
