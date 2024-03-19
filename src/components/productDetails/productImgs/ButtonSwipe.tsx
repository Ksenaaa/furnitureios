import { View } from 'react-native';

import { CustomIcon } from 'components/customIcon/CustomIcon';
import { Colors } from 'utils/constants/Colors';

import { stylesProductImgs as styles } from './ProductImgs.styles';

interface Props {
    name: string;
}

export const ButtonSwipe = ({ name }: Props) => {
    return (
        <View style={styles.buttonSwipe}>
            <CustomIcon name={name} size={30} color={Colors.gold} />
        </View>
    );
};
