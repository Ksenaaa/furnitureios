import { useEffect, useState } from 'react';

import { ContainerApp } from 'components/containerApp/ContainerApp';
import { ListProducts } from 'components/listProducts/ListProducts';
import { Loader } from 'components/loader/Loader';
import { NoFound } from 'components/noFound/NoFound';
import { CardProduct } from 'model/Product';
import { materialService } from 'services/materialService';
import { productService } from 'services/productService';
import useMaterialStore from 'store/MaterialStore';

export const HomeScreen = () => {
    const [products, setProducts] = useState<CardProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const setMaterials = useMaterialStore((state) => state.setMaterials);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const dataProducts = await productService.getAllProductCards('livingRooms');
            const dataMaterials = await materialService.getAllProductMaterials();
            setProducts(dataProducts.pageData);
            setMaterials(dataMaterials);
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <ContainerApp>
            {loading ? (
                <Loader />
            ) : products.length > 0 ? (
                <ListProducts products={products} />
            ) : (
                <NoFound />
            )}
        </ContainerApp>
    );
};
