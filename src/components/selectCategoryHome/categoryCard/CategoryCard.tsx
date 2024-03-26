import { Text, TouchableOpacity, View } from 'react-native';

import { ImgComponent } from 'components/ImgComponent/ImgComponent';
import { Loader } from 'components/loader/Loader';
import { MainCategoryImg } from 'model/mainCategoryImg';
import { MenuCategories } from 'model/menuCategories';

import { stylesCategoryCard as styles } from './CategoryCard.styles';

interface Props {
    item: MenuCategories;
    catalogImg?: MainCategoryImg[] | null;
    isLoadingImg: boolean;
    onChange: (id: string) => void;
}

export const CategoryCard = ({ item, catalogImg, isLoadingImg, onChange }: Props) => {
    const onSelectedCategory = () => {
        onChange(item.id);
    };

    return (
        <TouchableOpacity onPress={onSelectedCategory} style={styles.wrapperCategory}>
            <Text style={styles.nameCategory}>{item.fullName}</Text>
            {isLoadingImg ? (
                <Loader />
            ) : (
                catalogImg?.map(
                    (picture) =>
                        picture.name === item.id && (
                            <View key={picture.id} style={styles.wrapperImgCategory}>
                                <ImgComponent img={picture.img} />
                            </View>
                        )
                )
            )}
        </TouchableOpacity>
    );
};
