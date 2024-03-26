import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ContainerApp } from 'components/containerApp/ContainerApp';
import { NoFound } from 'components/noFound/NoFound';
import { ProductDetails } from 'components/productDetails/ProductDetails';
import { RootStackNavigatorParamsList } from 'model/rootStackNavigatorParamsList';
import { productService } from 'services/productService';
import { ScreenNames } from 'utils/constants/ScreenNames';
import { useFetchQuery } from 'utils/hooks/useFetchQuery';

type Props = NativeStackScreenProps<RootStackNavigatorParamsList, ScreenNames.DETAILS>;

export const ProductDetailsScreen = ({ navigation, route }: Props) => {
    const { productId } = route.params;

    const { data: product, isLoading } = useFetchQuery(productService.getProductId, productId);

    return (
        <ContainerApp isLoading={isLoading}>
            {product ? (
                <ProductDetails product={product} navigation={navigation} />
            ) : (
                !isLoading && <NoFound />
            )}
        </ContainerApp>
    );
};
