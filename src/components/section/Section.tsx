import { Text, View } from 'react-native';

import { stylesSection as styles } from './Section.styles';

interface Props {
    title: string;
}

export const Section = ({ title }: Props) => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{title}</Text>
        </View>
    );
};
