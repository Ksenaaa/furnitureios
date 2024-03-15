import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ImgComponent } from 'components/ImgComponent/ImgComponent';
import { CardProduct } from 'model/Product';
import { ProductMaterial } from 'model/productMaterial';
import { Colors } from 'utils/constants/Colors';
import { productColors } from 'utils/helpers/productColors';

interface Props {
    item: CardProduct;
    materials: ProductMaterial[];
}

export const ItemList = ({ item, materials }: Props) => {
    const onClick = () => {
        //TODO: a link to the product page will be added
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

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        height: 190,
        marginVertical: 8,
        padding: 20,
        borderColor: Colors.grey,
        borderWidth: 1,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    wrapperImg: {
        flex: 1,
    },
    wrapperDesc: {
        flex: 1,
        justifyContent: 'space-between',
    },
    itemCode: {
        fontSize: 10,
        marginBottom: 4,
    },
    itemName: {
        fontSize: 18,
        marginBottom: 4,
    },
    itemCategory: {
        fontSize: 14,
        marginBottom: 6,
    },
    itemPrice: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.gold,
        marginLeft: 'auto',
    },
    wrapperProductMaterials: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 6,
        marginBottom: 'auto',
    },
    productMaterial: {
        borderRadius: 12,
        overflow: 'hidden',
        width: 20,
        height: 20,
    },
});
