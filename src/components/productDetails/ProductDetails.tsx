import { ScrollView, Text, View } from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ImgComponent } from 'components/ImgComponent/ImgComponent';
import { CustomButton } from 'components/customButton/CustomButton';
import { Product } from 'model/Product';
import { RootStackNavigatorParamsList } from 'model/rootStackNavigatorParamsList';
import useMaterialStore from 'store/MaterialStore';
import { productColors } from 'utils/helpers/productColors';
import { useToggle } from 'utils/hooks/useToggle';

import { CategoryDetails } from './categoryDetails/CategoryDetails';
import { ProductImgs } from './productImgs/ProductImgs';

import { stylesProductDetails as styles } from './ProductDetails.styles';

interface Props {
    product: Product;
    navigation: NativeStackNavigationProp<RootStackNavigatorParamsList>;
}

export const ProductDetails = ({ product, navigation }: Props) => {
    const materials = useMaterialStore((state) => state.materials);
    const colors = productColors(product.colors, materials);

    const { isOpen: isOpenMoreProductAbout, onToggle: onToggleOpenMoreProductAbout } = useToggle();

    const onHandleBack = () => {
        navigation.goBack();
    };

    const handleAddToBasket = () => {
        //TODO: Add functionality to add to basket
    };

    return (
        <>
            <View style={styles.buttonBuy}>
                <CustomButton title="Go to List" onPress={onHandleBack} isSimple />
            </View>
            <ScrollView>
                <ProductImgs imgs={product.imgs} />
                <Text style={styles.name}>{product.name}</Text>
                <CategoryDetails category="General">
                    <Text style={styles.generalText}>Code: {product.code}</Text>
                    <Text style={styles.generalText}>Category: {product.category}</Text>
                    <Text style={styles.generalText}>Type: {product.type}</Text>
                </CategoryDetails>
                <CategoryDetails category="Size">
                    <Text style={styles.generalText}>
                        height: {product.characteristics.size.height}
                    </Text>
                    <Text style={styles.generalText}>
                        length: {product.characteristics.size.length}
                    </Text>
                    <Text style={styles.generalText}>
                        width: {product.characteristics.size.width}
                    </Text>
                </CategoryDetails>
                <CategoryDetails category="Prices">
                    <Text style={styles.generalText}>{`King: ${product.quality.king}$`}</Text>
                    <Text style={styles.generalText}>{`Queen: ${product.quality.queen}$`}</Text>
                    <Text
                        style={styles.generalText}
                    >{`Standart: ${product.quality.standart}$`}</Text>
                    <Text style={styles.generalText}>{`Twin: ${product.quality.twin}$`}</Text>
                </CategoryDetails>
                <CategoryDetails category="Materials">
                    <View style={styles.wrapperProductMaterials}>
                        {colors?.map((color, index) => (
                            <View style={styles.productMaterial} key={index}>
                                <ImgComponent img={color.img} />
                            </View>
                        ))}
                    </View>
                </CategoryDetails>
                <CategoryDetails category="Other Parameters">
                    <Text style={styles.generalText}>{product.characteristics.other}</Text>
                </CategoryDetails>
                <CategoryDetails category="About">
                    <>
                        <Text style={styles.generalText}>
                            {isOpenMoreProductAbout
                                ? product.about
                                : `${product.about.slice(0, 150)}...`}
                        </Text>
                        {product.about.length > 50 && (
                            <View style={styles.buttonShowMore}>
                                <CustomButton
                                    title={isOpenMoreProductAbout ? 'Show less' : 'Show more'}
                                    onPress={onToggleOpenMoreProductAbout}
                                    isSimple
                                />
                            </View>
                        )}
                    </>
                </CategoryDetails>
            </ScrollView>
            <View style={styles.buttonBuy}>
                <CustomButton title="Add to basket" onPress={handleAddToBasket} />
            </View>
        </>
    );
};
