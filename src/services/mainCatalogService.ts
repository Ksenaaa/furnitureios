import { MainCategoryImg } from "model/mainCategoryImg";

import { get } from "./api";

export const mainCatalogService = {
    async getMainCategoryImgs(): Promise<MainCategoryImg[]> {
        const result = await get('main-catalog');

        return result as MainCategoryImg[];
    },
}
