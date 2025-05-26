import { StyleSheet, Text, View } from 'react-native';
import { iconName } from '@constant/iconNames';
import Icon from '@components/atmos/icon/icon';

interface AccommodationProps {
	bathrooms: number;
	bedrooms: number;
	carparks: number;
	landSize: number;
}

const Accommodation: React.FC<AccommodationProps> = ({
	bathrooms,
	bedrooms,
	carparks,
	landSize,
}) => {
	return (
		<View style={styles.accommodation_Container}>
			<View style={styles.accommodation_Content}>
				<Icon iconName={iconName.bed} size={27} />
				<Text>{bedrooms}</Text>
			</View>
			<View style={styles.accommodation_Content}>
				<Icon iconName={iconName.bath} size={27} />
				<Text>{bathrooms}</Text>
			</View>
			<View style={styles.accommodation_Content}>
				<Icon iconName={iconName.car} size={27} />
				<Text>{carparks}</Text>
			</View>
			<View style={styles.accommodation_Content}>
				<Icon iconName={iconName.sqMtr} size={27} />
				<Text>{landSize} m²</Text>
			</View>
		</View>
	);
};

export default Accommodation;

const styles = StyleSheet.create({
	accommodation_Container: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	accommodation_Content: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		gap: 0,
	},
});
