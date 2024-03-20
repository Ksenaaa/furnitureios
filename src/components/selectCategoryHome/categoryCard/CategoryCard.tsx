import { Text, TouchableOpacity, View } from 'react-native';

import { ImgComponent } from 'components/ImgComponent/ImgComponent';
import { MainCategoryImg } from 'model/mainCategoryImg';
import { MenuCategories } from 'model/menuCategories';

import { stylesCategoryCard as styles } from './CategoryCard.styles';

interface Props {
    item: MenuCategories;
    catalogImg: MainCategoryImg[];
    onChange: (id: string) => void;
}

export const CategoryCard = ({ item, catalogImg, onChange }: Props) => {
    const onSelectedCategory = () => {
        onChange(item.id);
    };

    return (
        <TouchableOpacity onPress={onSelectedCategory} style={styles.wrapperCategory}>
            <Text style={styles.nameCategory}>{item.fullName}</Text>
            {catalogImg?.map(
                (picture) =>
                    picture.name === item.id && (
                        <View key={picture.id} style={styles.wrapperImgCategory}>
                            <ImgComponent img={picture.img} />
                        </View>
                    )
            )}
        </TouchableOpacity>
    );
};
