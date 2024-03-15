import { CardProduct, Product } from "model/Product";
import { get } from "./app";

export const productService = {
    async getAllProductCards(): Promise<CardProduct[]> {
        const result = await get('product/new');

        return result as CardProduct[];
    },
    async getProductId(id: string): Promise<Product> {
        const result = await get(`product/${id}`);

        return result;
    },
}
