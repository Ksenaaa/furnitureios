import { useEffect } from 'react';

import { ContainerApp } from 'components/containerApp/ContainerApp';
import { ListProducts } from 'components/listProducts/ListProducts';
import { NoFound } from 'components/noFound/NoFound';
import { SelectCategoryHome } from 'components/selectCategoryHome/SelectCategoryHome';
import { materialService } from 'services/materialService';
import { productService } from 'services/productService';
import useCategoryStore from 'store/CategoryStore';
import useMaterialStore from 'store/MaterialStore';
import { useFetchQuery } from 'utils/hooks/useFetchQuery';

export const HomeScreen = () => {
    const setMaterials = useMaterialStore((state) => state.setMaterials);
    const category = useCategoryStore((state) => state.category);

    const { data: products, isLoading } = useFetchQuery(
        productService.getAllProductCards,
        category
    );

    const { data: dataMaterials } = useFetchQuery(materialService.getAllProductMaterials);

    useEffect(() => {
        dataMaterials && setMaterials(dataMaterials);
    }, [dataMaterials]);

    return (
        <>
            <ContainerApp isLoading={isLoading}>
                {products && products.pageData.length > 0 ? (
                    <ListProducts products={products?.pageData} />
                ) : (
                    !isLoading && <NoFound />
                )}
            </ContainerApp>
            <SelectCategoryHome />
        </>
    );
};
