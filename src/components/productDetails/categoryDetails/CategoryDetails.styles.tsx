import { StyleSheet } from 'react-native';

import { Colors } from 'utils/constants/Colors';

export const stylesCategoryDetails = StyleSheet.create({
    container: {
        borderColor: Colors.grey,
        borderWidth: 1,
        width: '100%',
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 12,
    },
    wrapperTitle: {
        backgroundColor: Colors.pastelteal,
        paddingHorizontal: 20,
        paddingVertical: 6,
    },
    wrapperContent: {
        backgroundColor: Colors.white,
        padding: 12,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.white,
    },
});
