import Product from "@/models/Product";
import { ProductType } from "@/types/index";

const getProductCount = async (perPage: number) => {
    const pdts: ProductType[] = await Product.find();
    return pdts.length / perPage;
};

export default getProductCount;
