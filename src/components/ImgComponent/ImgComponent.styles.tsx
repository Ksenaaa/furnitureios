import { StyleSheet } from 'react-native';

export const stylesImgComponent = StyleSheet.create({
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
