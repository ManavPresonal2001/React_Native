import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from '@utility/index';
import { colors } from '@constant/colors';
import { CardHeaderProps } from '@utility/types';

const CardHeader: React.FC<CardHeaderProps> = ({
	headerImg,
	headerBgColor,
	agentName,
	agentImg,
}) => {
	const headerStyle = { backgroundColor: `#${headerBgColor}` };
	const { firstName, lastName } = agentName;

	return (
		<View style={[styles.cardHeader, headerStyle]}>
			<View style={styles.headerLeftbar}>
				<Image source={{ uri: headerImg }} style={styles.agencyImg} />
			</View>
			<View style={styles.headerRightbar}>
				<Text style={styles.headerText}>
					{firstName} {lastName}
				</Text>
			</View>
			<View style={styles.agentImage}>
				<ImageBackground
					source={{ uri: agentImg }}
					resizeMode='cover'
					style={styles.imgStyles}
				></ImageBackground>
			</View>
		</View>
	);
};

export default CardHeader;

const styles = StyleSheet.create({
	imgStyles: {
		flex: 1,
		justifyContent: 'center',
	},
	cardHeader: {
		height: 40,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		color: colors.primary_white,
		paddingHorizontal: 20,
		paddingRight: 85,
		borderBottomWidth: 1,
		borderBottomColor: colors.primary_white,
	},
	headerLeftbar: {
		width: '30%',
	},
	headerRightbar: {
		width: '70%',
	},
	headerText: {
		color: colors.primary_white,
		fontSize: 14,
		textAlign: 'right',
	},
	agentImage: {
		height: 65,
		width: 65,
		alignSelf: 'flex-end',
		backgroundColor: colors.primary_white,
		borderRadius: '50%',
		borderWidth: 1,
		borderColor: colors.primary_white,
		position: 'absolute',
		zIndex: 1,
		top: 10,
		right: 10,
		overflow: 'hidden',
	},
	agencyImg: {
		width: responsiveWidth(100),
		height: responsiveHeight(15),
	},
});
