import { Image, View } from 'react-native';

import { stylesImgComponent as styles } from './ImgComponent.styles';

interface Props {
    img: string;
    heigh?: number;
    width?: number;
}

export const ImgComponent = ({ img, heigh, width }: Props) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: `${process.env.REACT_APP_DEV_MODE}${img}` }}
                alt="img"
                height={heigh}
                width={width}
                style={styles.imgElement}
                resizeMode="contain"
            />
        </View>
    );
};
