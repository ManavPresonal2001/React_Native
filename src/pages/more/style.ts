import { responsiveFontSize } from '@utility/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 24,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 14,
	},
	moreContentContainer: {
		flex: 1,
		marginTop: 20,
	},
	moreList: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 14,
		paddingHorizontal: 0,
	},
	moreListText: {
		fontSize: responsiveFontSize(16),
		marginLeft: 16,
	},
	bottomText: {
		marginTop: 15,
		alignSelf: 'center',
	},
});
