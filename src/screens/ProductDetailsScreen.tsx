import { useEffect, useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ContainerApp } from 'components/containerApp/ContainerApp';
import { Loader } from 'components/loader/Loader';
import { NoFound } from 'components/noFound/NoFound';
import { ProductDetails } from 'components/productDetails/ProductDetails';
import { Product } from 'model/Product';
import { RootStackNavigatorParamsList } from 'model/rootStackNavigatorParamsList';
import { productService } from 'services/productService';
import { ScreenNames } from 'utils/constants/ScreenNames';

type Props = NativeStackScreenProps<RootStackNavigatorParamsList, ScreenNames.DETAILS>;

export const ProductDetailsScreen = ({ navigation, route }: Props) => {
    const { productId } = route.params;

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            const dataProduct = await productService.getProductId(productId);
            setProduct(dataProduct);

            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <ContainerApp>
            {loading ? (
                <Loader />
            ) : product ? (
                <ProductDetails product={product} navigation={navigation} />
            ) : (
                <NoFound />
            )}
        </ContainerApp>
    );
};
