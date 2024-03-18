import { StyleSheet } from 'react-native';

import { Colors } from 'utils/constants/Colors';

export const stylesItemList = StyleSheet.create({
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
