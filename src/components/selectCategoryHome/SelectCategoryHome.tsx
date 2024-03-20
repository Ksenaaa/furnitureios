import { useEffect, useState } from 'react';

import { useBottomSheetModal } from '@gorhom/bottom-sheet';

import { ModalBottomSheet } from 'components/modalBottomSheet/ModalBottomSheet';
import { MainCategoryImg } from 'model/mainCategoryImg';
import { mainCatalogService } from 'services/mainCatalogService';
import useCategoryStore from 'store/CategoryStore';
import { menuCategories } from 'utils/constants/MenuCategories';

import { CategoryCard } from './categoryCard/CategoryCard';

import { stylesSelectCategoryHome as styles } from './SelectCategoryHome.styles';

export const SelectCategoryHome = () => {
    const [catalogPictures, setCatalogPictures] = useState<MainCategoryImg[]>([]);

    const setCategory = useCategoryStore((state) => state.setCategory);

    const { dismiss } = useBottomSheetModal();

    const handleSelectedCategory = (id: string) => {
        setCategory(id);
        dismiss();
    };

    useEffect(() => {
        const fetchData = async () => {
            const dataCatalogPictures = await mainCatalogService.getMainCategoryImgs();
            setCatalogPictures(dataCatalogPictures);
        };

        fetchData();
    }, []);

    return (
        <ModalBottomSheet buttonTitle="Select category" buttonStyles={styles.buttonOpenModal}>
            {menuCategories.map((item) => (
                <CategoryCard
                    key={item.id}
                    item={item}
                    catalogImg={catalogPictures}
                    onChange={handleSelectedCategory}
                />
            ))}
        </ModalBottomSheet>
    );
};
