import { StyleSheet, Text, View } from 'react-native';
import { responsiveFontSize, responsiveHeight } from '@utility/index';
import Accommodation from './accommodation/accommodation';
import CardFooter from './cardFooter/cardFooter';
import CardHeader from './cardHeader/cardHeader';
import CardImages from './cardImages/cardImages';
import { fonts } from '@constant/fontsName';
import { colors } from '@constant/colors';
import { cardProps } from '@utility/types';

const Card: React.FC<cardProps> = ({
	agentName,
	heroImages,
	agencyImg,
	brandColour,
	agentImg,
	priceText,
	unitNumber,
	streetNumber,
	streetName,
	suburbName,
	state,
	postcode,
	bathrooms,
	bedrooms,
	carparks,
	landSize,
	primaryPropertyType,
}) => {
	const IMAGE = `https://resi.uatz.view.com.au/viewstatic/images/listing/376-min/`;

	return (
		<>
			<View style={styles.cardContainer}>
				<CardHeader
					headerImg={IMAGE + `${agencyImg}`}
					headerBgColor={brandColour}
					agentName={agentName}
					agentImg={IMAGE + `${agentImg}`}
				/>
				<CardImages heroImages={heroImages} />
				<View style={styles.cardContent}>
					<Text style={styles.propertyPrice}>{priceText}</Text>
					<Text style={styles.propertyAddress}>
						{unitNumber}/{streetNumber} {streetName}, {suburbName}, {state} {postcode}
					</Text>
					<Accommodation
						bathrooms={bathrooms}
						bedrooms={bedrooms}
						carparks={carparks}
						landSize={landSize}
					/>
					<CardFooter primaryPropertyType={primaryPropertyType} />
				</View>
			</View>
		</>
	);
};

export default Card;

const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: colors.primary_white,
		borderBottomColor: colors.primary_white,
		minHeight: responsiveHeight(420),
		marginBottom: 23,
	},
	cardContent: {
		padding: 15,
		gap: 8,
	},
	propertyPrice: {
		fontSize: responsiveFontSize(18),
		fontWeight: 600,
		fontFamily: fonts.golosTextMedium,
	},
	propertyAddress: {
		fontSize: responsiveFontSize(14),
		fontFamily: fonts.golosTextRegular,
		color: '#5F6674FF',
		marginBottom: 6,
	},
});
