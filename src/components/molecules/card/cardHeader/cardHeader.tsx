import { Image, StyleSheet, Text, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from '@utility/index';

interface CardHeader {
	headerImg: string;
	headerBgColor: string;
}

const CardHeader: React.FC<CardHeader> = ({ headerImg, headerBgColor }) => {
	const headerStyle = { backgroundColor: `#${headerBgColor}` };

	return (
		<View style={[styles.cardHeader, headerStyle]}>
			<View style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
				<Image source={{ uri: headerImg }} style={styles.agencyImg} />
			</View>
			<Text style={styles.headerText}>Julie Taylor</Text>
			<View style={styles.headerImg}></View>
		</View>
	);
};

export default CardHeader;

const styles = StyleSheet.create({
	cardHeader: {
		height: 40,
		// backgroundColor: '#111E57FF',
		color: 'white',
		justifyContent: 'space-around',
		flexDirection: 'row',
		alignItems: 'center',
	},
	headerText: {
		color: 'white',
		fontSize: 14,
	},
	headerImg: {
		position: 'absolute',
		height: 65,
		width: 65,
		backgroundColor: 'white',
		alignSelf: 'flex-end',
		borderRadius: '50%',
		zIndex: 1,
		top: 10,
		right: 10,
	},
	agencyImg: {
		width: responsiveWidth(100),
		height: responsiveHeight(20),
	},
});
