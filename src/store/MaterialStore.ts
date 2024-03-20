import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ProductMaterial } from 'model/productMaterial';

interface MaterialStore {
    materials: ProductMaterial[],
    setMaterials: (data: ProductMaterial[]) => void
}

const useMaterialStore = create<MaterialStore>()(persist((set) => ({
    materials: [],
    setMaterials: (data) => {
        set({
            materials: data
        });
    }
}),
    {
        name: 'materials-storage',
        storage: createJSONStorage(() => AsyncStorage),
    }
));

export default useMaterialStore;
