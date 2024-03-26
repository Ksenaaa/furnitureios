import { MainCategoryImg } from "model/mainCategoryImg";

import { get } from "./api";

export const mainCatalogService = {
    async getMainCategoryImgs(signal: AbortSignal): Promise<MainCategoryImg[]> {
        const result = await get('main-catalog', signal);

        return result as MainCategoryImg[];
    },
}
