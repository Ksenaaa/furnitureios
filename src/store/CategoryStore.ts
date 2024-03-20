import { create } from 'zustand';

import { menuCategories } from "utils/constants/MenuCategories";

interface CategoryStore {
    category: string,
    setCategory: (name: string) => void
}

const useCategoryStore = create<CategoryStore>((set) => ({
    category: menuCategories[0].id,
    setCategory: (name) => {
        set({
            category: name
        });
    }
})
);

export default useCategoryStore;
