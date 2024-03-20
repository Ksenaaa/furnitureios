import { useEffect, useState } from 'react';

import { ContainerApp } from 'components/containerApp/ContainerApp';
import { ListProducts } from 'components/listProducts/ListProducts';
import { Loader } from 'components/loader/Loader';
import { NoFound } from 'components/noFound/NoFound';
import { SelectCategoryHome } from 'components/selectCategoryHome/SelectCategoryHome';
import { CardProduct } from 'model/Product';
import { materialService } from 'services/materialService';
import { productService } from 'services/productService';
import useCategoryStore from 'store/CategoryStore';
import useMaterialStore from 'store/MaterialStore';

export const HomeScreen = () => {
    const [products, setProducts] = useState<CardProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const setMaterials = useMaterialStore((state) => state.setMaterials);
    const category = useCategoryStore((state) => state.category);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            const dataProducts = await productService.getAllProductCards(category);
            const dataMaterials = await materialService.getAllProductMaterials();
            setProducts(dataProducts.pageData);
            setMaterials(dataMaterials);

            setLoading(false);
        };

        fetchData();
    }, [category]);

    return (
        <>
            <ContainerApp>
                {loading ? (
                    <Loader />
                ) : products.length > 0 ? (
                    <ListProducts products={products} />
                ) : (
                    <NoFound />
                )}
            </ContainerApp>
            <SelectCategoryHome />
        </>
    );
};
