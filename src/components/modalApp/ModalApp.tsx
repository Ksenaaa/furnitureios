import { PropsWithChildren } from 'react';
import { Modal, ScrollView, View } from 'react-native';

import { CustomButton } from 'components/customButton/CustomButton';

import { stylesModalApp as styles } from './ModalApp.styles';

interface Props {
    isVisibleModal: boolean;
    onCancel?: () => void;
    onApply?: () => void;
    titleButtonCancel?: string;
    titleButtonApply?: string;
}

export const ModalApp = ({
    isVisibleModal,
    onCancel,
    onApply,
    titleButtonCancel,
    titleButtonApply,
    children,
}: PropsWithChildren<Props>) => {
    return (
        <Modal animationType="slide" transparent={true} visible={isVisibleModal}>
            <View style={styles.substrateView}>
                <View style={styles.modalView}>
                    <ScrollView>{children}</ScrollView>
                    <View style={styles.wrapperButtons}>
                        {titleButtonCancel && onCancel && (
                            <View style={styles.buttonClose}>
                                <CustomButton
                                    title={titleButtonCancel}
                                    onPress={onCancel}
                                    isSimple
                                />
                            </View>
                        )}
                        {titleButtonApply && onApply && (
                            <View style={styles.buttonClose}>
                                <CustomButton title={titleButtonApply} onPress={onApply} isSimple />
                            </View>
                        )}
                    </View>
                </View>
            </View>
        </Modal>
    );
};
