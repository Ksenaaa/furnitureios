import { StyleSheet, Text, View } from 'react-native';

import { Colors } from 'utils/constants/Colors';

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

const styles = StyleSheet.create({
    sectionContainer: {
        marginVertical: 20,
        paddingHorizontal: 10,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '800',
        color: Colors.greyish,
    },
});
