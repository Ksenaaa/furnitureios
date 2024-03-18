import React from 'react';
import { Button, View } from 'react-native';

import { Colors } from 'utils/constants/Colors';

import { stylesCustomButton as styles } from './CustomButton.styles';

interface Props {
    title: string;
    onPress: () => void;
    disabled?: boolean;
}

export const CustomButton = (props: Props) => (
    <View style={styles.container}>
        <Button {...props} color={Colors.transparentGold} />
    </View>
);
