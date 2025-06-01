import { ReactNode } from 'react';
import { Modal, StyleSheet, View } from 'react-native';

interface ModalScreen {
	children: ReactNode;
	modalVisible: boolean;
	setModalVisible: (visible: boolean) => void;
}

const ModalScreen: React.FC<ModalScreen> = ({ children, modalVisible, setModalVisible }) => {
	return (
		<Modal
			animationType='fade'
			visible={modalVisible}
			onRequestClose={() => setModalVisible(!modalVisible)}
		>
			<View style={styles.modalView}>{children}</View>
		</Modal>
	);
};

export default ModalScreen;

const styles = StyleSheet.create({
	modalView: {
		height: '100%',
		width: '100%',
		paddingHorizontal: 15,
		paddingTop: 20,
	},
});
