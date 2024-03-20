import { StyleSheet } from 'react-native';

import { Colors } from 'utils/constants/Colors';

export const stylesModalBottomSheet = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    contentContainer: {
        alignItems: 'center',
        padding: 14,
        backgroundColor: Colors.transparentGreyish,
    },
    handlebar: {
        backgroundColor: Colors.transparentGreyish,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    dimmer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: Colors.transparentGrey,
    },
});
