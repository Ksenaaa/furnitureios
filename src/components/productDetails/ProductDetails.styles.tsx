import { StyleSheet } from 'react-native';

export const stylesProductDetails = StyleSheet.create({
    name: {
        fontSize: 26,
        fontWeight: '400',
        marginBottom: 12,
    },
    generalText: {
        fontSize: 18,
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
        width: 30,
        height: 30,
    },
    buttonShowMore: {
        height: 50,
    },
    buttonBuy: {
        height: 50,
    },
});
