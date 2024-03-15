import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import { Colors } from 'utils/constants/Colors';

interface Props {
    title: string;
    onPress: () => void;
    disabled?: boolean;
}

export const CustomButton = ({ title, onPress, disabled }: Props) => (
    <View style={styles.container}>
        <Button
            title={title}
            onPress={onPress}
            disabled={disabled}
            color={Colors.transparentGold}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderColor: Colors.black,
        borderWidth: 2,
        borderRadius: 18,
        backgroundColor: Colors.poseidon,
    },
});
