import { ActivityIndicator, View } from 'react-native';

import { Colors } from 'utils/constants/Colors';

import { stylesLoader as styles } from './Loader.styles';

export const Loader = () => (
    <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.gold} />
    </View>
);
