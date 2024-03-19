import { StyleSheet } from 'react-native';

import { Colors } from 'utils/constants/Colors';

export const stylesCustomButton = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 15,
        height: '100%',
        width: '100%',
    },
    full: {
        borderColor: Colors.black,
        backgroundColor: Colors.poseidon,
        borderWidth: 2,
        borderRadius: 18,
    },
});
