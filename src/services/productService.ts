import { CardProduct, Product } from "model/Product";
import { DataPage } from "model/dataPage";

import { get } from "./api";

export const productService = {
    async getAllProductCards(signal: AbortSignal, category: string): Promise<DataPage<CardProduct[]>> {
        const result = await get(`product/list/${category}`, signal);

        return result as DataPage<CardProduct[]>;
    },
    async getNewProductCards(signal: AbortSignal): Promise<CardProduct[]> {
        const result = await get('product/new', signal);

        return result as CardProduct[];
    },
    async getProductId(signal: AbortSignal, id: string): Promise<Product> {
        const result = await get(`product/${id}`, signal);

        return result;
    },
}
