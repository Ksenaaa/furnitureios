import { PropsWithChildren, useCallback, useMemo, useRef } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';

import { CustomButton } from 'components/customButton/CustomButton';
import { useToggle } from 'utils/hooks/useToggle';

import { snapPoints } from './constants/snapPoints';

import { stylesModalBottomSheet as styles } from './ModalBottomSheet.styles';

interface Props {
    buttonTitle: string;
    buttonStyles: StyleProp<ViewStyle>;
}

export const ModalBottomSheet = ({
    buttonTitle,
    buttonStyles,
    children,
}: PropsWithChildren<Props>) => {
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const { isOpen: isVisibleDimmer, onOpen: onShowDimmer, onClose: onHideDimmer } = useToggle();

    const snap = useMemo(() => snapPoints, []);

    const handleOpenModal = useCallback(() => {
        onShowDimmer();
        bottomSheetRef.current?.present();
    }, []);

    const handleCloseModal = useCallback(() => {
        onHideDimmer();
        bottomSheetRef.current?.dismiss();
    }, []);

    return (
        <>
            <View style={buttonStyles}>
                <CustomButton title={buttonTitle} onPress={handleOpenModal} isSimple />
            </View>
            {isVisibleDimmer && <View style={styles.dimmer} />}
            <View style={styles.container}>
                <BottomSheetModal
                    ref={bottomSheetRef}
                    index={1}
                    snapPoints={snap}
                    handleStyle={styles.handlebar}
                    onDismiss={handleCloseModal}
                >
                    <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
                        {children}
                    </BottomSheetScrollView>
                </BottomSheetModal>
            </View>
        </>
    );
};
