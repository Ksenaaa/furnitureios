import { StyleSheet } from 'react-native';

import { Colors } from 'utils/constants/Colors';

export const stylesModalApp = StyleSheet.create({
    substrateView: {
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        marginHorizontal: 50,
        marginVertical: 100,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: Colors.black,
        shadowOpacity: 1.2,
        shadowRadius: 90,
    },
    wrapperButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonClose: {
        height: 40,
        flex: 1,
    },
});
