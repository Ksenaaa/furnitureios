import { CardProduct, Product } from "model/Product";
import { DataPage } from "model/dataPage";
import { get } from "./api";

export const productService = {
    async getAllProductCards(category: string): Promise<DataPage<CardProduct[]>> {
        const result = await get(`product/list/${category}`);

        return result as DataPage<CardProduct[]>;
    },
    async getNewProductCards(): Promise<CardProduct[]> {
        const result = await get('product/new');

        return result as CardProduct[];
    },
    async getProductId(id: string): Promise<Product> {
        const result = await get(`product/${id}`);

        return result;
    },
}
