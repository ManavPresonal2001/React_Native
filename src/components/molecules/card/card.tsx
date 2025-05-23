import { StyleSheet, Text, View } from 'react-native';
import { responsiveFontSize, responsiveHeight } from '@utility/index';
import Accommodation from './accommodation/accommodation';
import CardFooter from './cardFooter/cardFooter';
import CardHeader from './cardHeader/cardHeader';
import CardImages from './cardImages/cardImages';

interface CardProps {
	heroImg: string;
	agencyImg: string;
	headerBgColor: string;
}

const Card: React.FC<CardProps> = ({ heroImg, agencyImg, headerBgColor }) => {
	const IMAGE = `https://resi.uatz.view.com.au/viewstatic/images/listing/376-min/`;

	return (
		<>
			<View style={styles.cardContainer}>
				<CardHeader headerImg={IMAGE + `${agencyImg}`} headerBgColor={headerBgColor} />
				<CardImages headerImg={IMAGE + `${heroImg}`} />
				<View style={styles.cardContent}>
					<Text style={styles.propertyPrice}>700000</Text>
					<Text style={styles.propertyAddress}>1/201 Puntt Road, Richmond, VIC 3121</Text>
					<Accommodation />
					<CardFooter />
				</View>
			</View>
		</>
	);
};

export default Card;

const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: 'white',
		borderBottomColor: 'white',
		minHeight: responsiveHeight(420),
		marginBottom: 23,
	},
	cardContent: {
		padding: 15,
		gap: 6,
	},
	propertyPrice: {
		fontSize: responsiveFontSize(18),
		fontWeight: 600,
	},
	propertyAddress: {
		fontSize: responsiveFontSize(14),
		color: '#5F6674FF',
		marginBottom: 6,
	},
});
