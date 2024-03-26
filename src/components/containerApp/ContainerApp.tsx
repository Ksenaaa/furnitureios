import { PropsWithChildren } from 'react';
import { SafeAreaView, View } from 'react-native';

import { Loader } from 'components/loader/Loader';

import { stylesContainerApp as styles } from './ContainerApp.styles';

interface Props {
    isLoading: boolean;
}

export const ContainerApp = ({ isLoading, children }: PropsWithChildren<Props>) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            {isLoading && <Loader />}
            <View style={styles.innerContainer}>{children}</View>
        </SafeAreaView>
    );
};
