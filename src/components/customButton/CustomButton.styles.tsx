import { StyleSheet } from 'react-native';

import { Colors } from 'utils/constants/Colors';

export const stylesCustomButton = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderColor: Colors.black,
        borderWidth: 2,
        borderRadius: 18,
        backgroundColor: Colors.poseidon,
    },
});
