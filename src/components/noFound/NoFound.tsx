import { Text, View } from 'react-native';

import { stylesNoFound as styles } from './NoFound.styles';

export const NoFound = () => {
    return (
        <View style={styles.wrapperTextNoFound}>
            <Text style={styles.textNoFound}>No Found</Text>
        </View>
    );
};
