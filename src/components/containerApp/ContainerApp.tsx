import { PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

export const ContainerApp = ({ children }: PropsWithChildren) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.innerContainer}>{children}</View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        height: '100%',
    },
    innerContainer: {
        height: '100%',
        width: '100%',
        paddingHorizontal: 14,
        paddingBottom: 37,
    },
});
