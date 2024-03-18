import { PropsWithChildren } from 'react';
import { SafeAreaView, View } from 'react-native';

import { stylesContainerApp as styles } from './ContainerApp.styles';

export const ContainerApp = ({ children }: PropsWithChildren) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.innerContainer}>{children}</View>
        </SafeAreaView>
    );
};
