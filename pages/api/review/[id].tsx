import { NextApiRequest, NextApiResponse } from "next";

import dbConnect from "@/utils/dbConnect";
import Product from "@/models/Product";
import { ProductType, ReviewType } from "@/types/index";
import mongoose from "mongoose";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        try {
            await dbConnect();

            let newPdt: ReviewType = req.body;
            const { id } = req.query;

            let pdt: ProductType = await Product.findById(id);

            const allRatings: number[] = [
                ...pdt.reviews.map((review: ReviewType) => review.rating),
                newPdt.rating,
            ];

            const avgRating: number = parseInt(
                (
                    allRatings.reduce(
                        (accumulator, currentValue) =>
                            accumulator + currentValue
                    ) / allRatings.length
                ).toFixed(0)
            );
            // console.log(avgRating);
            newPdt.user = newPdt.user.split("@")[0];
            pdt.reviews.push(newPdt);
            pdt.rating = avgRating;
            const updatedPdt = await Product.findOneAndUpdate(
                { _id: mongoose.Types.ObjectId(`${id}`) },
                { ...pdt }
            );

            // console.log(updatedPdt);

            res.status(200).json({ message: "Review saved" });
        } catch (err: any) {
            res.status(500).json({ message: "POST data is incorrect" });
        }
    } else {
        res.status(404).json({ message: "route or method is incorrect" });
    }
};
