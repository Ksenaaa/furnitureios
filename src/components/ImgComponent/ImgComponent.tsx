import { Image, StyleSheet, View } from 'react-native';

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

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
    },
    imgElement: {
        position: 'absolute',
        objectFit: 'fill',
        height: '100%',
        width: '100%',
    },
});
