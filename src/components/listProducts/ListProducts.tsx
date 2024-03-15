import { FlatList, StyleSheet } from 'react-native';

import { ItemList } from 'components/listProducts/ItemList';
import { CardProduct } from 'model/Product';
import useMaterialStore from 'store/MaterialStore';

interface Props {
    products: CardProduct[];
}

export const ListProducts = ({ products }: Props) => {
    const materials = useMaterialStore((state) => state.materials);

    return (
        <FlatList
            style={styles.container}
            data={products}
            renderItem={({ item }) => <ItemList item={item} materials={materials} />}
            keyExtractor={(item) => item.id}
            extraData={materials}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        overflow: 'visible',
    },
});
