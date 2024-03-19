import { View } from 'react-native';
import Swiper from 'react-native-swiper';

import { ImgComponent } from 'components/ImgComponent/ImgComponent';
import { Colors } from 'utils/constants/Colors';

import { ButtonSwipe } from './ButtonSwipe';

import { stylesProductImgs as styles } from './ProductImgs.styles';

interface Props {
    imgs: string[];
}

export const ProductImgs = ({ imgs }: Props) => {
    return (
        <View style={styles.wrapperImg}>
            <Swiper
                style={styles.swiperWrapper}
                activeDotColor={Colors.gold}
                showsButtons={imgs.length > 1}
                buttonWrapperStyle={styles.buttonWrapper}
                nextButton={<ButtonSwipe name="chevron-right" />}
                prevButton={<ButtonSwipe name="chevron-left" />}
            >
                {imgs.map((img, index) => (
                    <View key={index} style={styles.swiperSlide}>
                        <ImgComponent img={img} />
                    </View>
                ))}
            </Swiper>
        </View>
    );
};
