import { useBottomSheetModal } from '@gorhom/bottom-sheet';

import { ModalBottomSheet } from 'components/modalBottomSheet/ModalBottomSheet';
import { mainCatalogService } from 'services/mainCatalogService';
import useCategoryStore from 'store/CategoryStore';
import { menuCategories } from 'utils/constants/MenuCategories';
import { useFetchQuery } from 'utils/hooks/useFetchQuery';

import { CategoryCard } from './categoryCard/CategoryCard';

import { stylesSelectCategoryHome as styles } from './SelectCategoryHome.styles';

export const SelectCategoryHome = () => {
    const setCategory = useCategoryStore((state) => state.setCategory);

    const { dismiss } = useBottomSheetModal();

    const handleSelectedCategory = (id: string) => {
        setCategory(id);
        dismiss();
    };

    const { data: catalogPictures, isLoading } = useFetchQuery(
        mainCatalogService.getMainCategoryImgs
    );

    return (
        <ModalBottomSheet buttonTitle="Select category" buttonStyles={styles.buttonOpenModal}>
            {menuCategories.map((item) => (
                <CategoryCard
                    key={item.id}
                    item={item}
                    catalogImg={catalogPictures}
                    isLoadingImg={isLoading}
                    onChange={handleSelectedCategory}
                />
            ))}
        </ModalBottomSheet>
    );
};
