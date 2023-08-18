import {Modal, StyleSheet} from "react-native";

import {ModalOverlay, ModalView, ModalTitle, ModalText, ModalButtonWrapper, ModalButton, ModalButtonText} from "./UI";

const ConfirmModal = ({visible, title, text, confirmText = 'Yes', cancelText = 'No', onConfirm, onCancel}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <ModalOverlay>
                <ModalView style={styles.modalView}>
                    {title && <ModalTitle>{title}</ModalTitle>}
                    {text && <ModalText>{text}</ModalText>}
                    <ModalButtonWrapper>
                        <ModalButton>
                            <ModalButtonText onPress={onConfirm}>{confirmText}</Text>
                        </ModalButton>
                        <ModalButton onPress={onCancel}>
                            <ModalButtonText>{cancelText}</ModalButtonText>
                        </ModalButton>
                    </ModalButtonWrapper>
                </ModalView>
            </ModalOverlay>
        </Modal>
    )
}

export default ConfirmModal;

const styles = StyleSheet.create({
    modalView: {
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
});