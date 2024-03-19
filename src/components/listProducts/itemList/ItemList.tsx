import { Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ImgComponent } from 'components/ImgComponent/ImgComponent';
import { CardProduct } from 'model/Product';
import { ProductMaterial } from 'model/productMaterial';
import { RootStackNavigatorParamsList } from 'model/rootStackNavigatorParamsList';
import { ScreenNames } from 'utils/constants/ScreenNames';
import { productColors } from 'utils/helpers/productColors';

import { stylesItemList as styles } from './ItemList.styles';

interface Props {
    item: CardProduct;
    materials: ProductMaterial[];
}

export const ItemList = ({ item, materials }: Props) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigatorParamsList>>();

    const onClick = () => {
        navigation.navigate(ScreenNames.DETAILS, { productId: item.id });
    };

    const colors = productColors(item.colors, materials);

    return (
        <TouchableOpacity onPress={onClick} style={styles.container}>
            <View style={styles.wrapperImg}>
                <ImgComponent img={item.img} />
            </View>
            <View style={styles.wrapperDesc}>
                <Text style={styles.itemCode}>{item.code}</Text>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCategory}>{item.category}</Text>
                <View style={styles.wrapperProductMaterials}>
                    {colors?.slice(-4).map((color, index) => (
                        <View style={styles.productMaterial} key={index}>
                            <ImgComponent img={color.img} />
                        </View>
                    ))}
                </View>
                <Text style={styles.itemPrice}>{`${item.price}$`}</Text>
            </View>
        </TouchableOpacity>
    );
};
