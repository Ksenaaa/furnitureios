import { ProductMaterial } from "model/productMaterial";
import { get } from "./api";

export const materialService = {
    async getAllProductMaterials(): Promise<ProductMaterial[]> {
        const result = await get('colors');

        return result as ProductMaterial[];
    },
}
