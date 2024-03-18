import { StyleSheet } from 'react-native';

import { Colors } from 'utils/constants/Colors';

export const stylesTabNavigator = StyleSheet.create({
    containerTabBar: {
        height: 70,
        position: 'absolute',
        paddingTop: 10,
        backgroundColor: Colors.grey,
        borderTopWidth: 0,
        borderTopColor: 'transparent',
    },
    blurStyles: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});
