import { StyleSheet } from 'react-native';

import { Colors } from 'utils/constants/Colors';

export const stylesCategoryCard = StyleSheet.create({
    wrapperCategory: {
        borderColor: Colors.grey,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
        flexDirection: 'row',
        width: '100%',
        height: 120,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    nameCategory: {
        flex: 1,
        color: Colors.matteteal,
        fontSize: 20,
        fontWeight: '400',
    },
    wrapperImgCategory: {
        flex: 1,
    },
});
