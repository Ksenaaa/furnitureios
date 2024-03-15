import { StyleSheet, Text, View } from 'react-native';

export const NoFound = () => {
    return (
        <View style={styles.wrapperTextNoFound}>
            <Text style={styles.textNoFound}>No Found</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapperTextNoFound: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textNoFound: {
        fontSize: 24,
    },
});
