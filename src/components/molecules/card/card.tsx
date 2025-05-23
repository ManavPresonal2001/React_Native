import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from '@components/atmos/icon/icon';
import { svgPaths } from '@constant/svgPaths';
import { responsiveHeight } from '@utility/index';
import { iconName } from '@constant/iconNames';

interface CardProps {
	iconNameA: keyof typeof svgPaths;
}

interface CardProps {
	iconNameA: keyof typeof svgPaths;
	heroImg: string;
}

const Card: React.FC<CardProps> = ({ heroImg }) => {
	return (
		<>
			<View style={styles.filterContainer}></View>
			<View style={styles.cardContainer}>
				<View style={styles.cardHeader}>
					<Image />
					<Text style={styles.headerText}>Julie Taylor</Text>
					<View style={styles.headerImg}></View>
				</View>
				<View style={styles.imageContainer}>
					<Image source={{ uri: heroImg }} style={styles.heroImage} />
				</View>
				<View style={styles.cardContent}>
					<Text>700000</Text>
					<Text>1/201 Puntt Road, Richmond, VIC 3121</Text>
					{/* <View style={styles.houseContent}>
						<View>
							<Icon iconName={iconName.bed} />
							<Text>3</Text>
						</View>
						<View>
							<Icon iconName={iconName.bath} />
							<Text>3</Text>
						</View>
						<View>
							<Icon iconName={iconName.car} />
							<Text>3</Text>
						</View>
						<View>
							<Icon iconName={iconName.sqMtr} />
							<Text>3</Text>
						</View>
					</View> */}
					<View style={styles.cardFooter}>
						<View>
							<Text>House</Text>
						</View>
						<View style={styles.footerIcon}>
							<Icon iconName={iconName.share} />
							<Icon iconName={iconName.heart} />
						</View>
					</View>
				</View>
			</View>
		</>
	);
};

export default Card;

const styles = StyleSheet.create({
	filterContainer: {
		height: responsiveHeight(60),
		backgroundColor: 'white',
	},
	cardContainer: {
		backgroundColor: 'pink',
		borderBottomColor: 'white',
		height: responsiveHeight(420),
	},
	cardHeader: {
		height: 40,
		backgroundColor: '#111E57FF',
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
	imageContainer: {
		height: responsiveHeight(250),
		width: '100%',
		backgroundColor: '#60D4F188',
	},
	cardContent: {
		padding: 20,
		gap: 8,
	},
	houseContent: {
		flexDirection: 'row',
	},
	cardFooter: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	footerIcon: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	heroImage: {
		width: 100,
		height: 100,
	},
});
