import { ProductMaterial } from "model/productMaterial";

import { get } from "./api";

export const materialService = {
    async getAllProductMaterials(signal: AbortSignal): Promise<ProductMaterial[]> {
        const result = await get('colors', signal);

        return result as ProductMaterial[];
    },
}
