import { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';

import { stylesCategoryDetails as styles } from './CategoryDetails.styles';

interface Props {
    category: string;
}

export const CategoryDetails = ({ category, children }: PropsWithChildren<Props>) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapperTitle}>
                <Text style={styles.title}>{category}</Text>
            </View>
            <View style={styles.wrapperContent}>{children}</View>
        </View>
    );
};
