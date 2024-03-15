import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { Colors } from 'utils/constants/Colors';

export const Loader = () => (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color={Colors.gold} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});
