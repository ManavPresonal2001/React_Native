import { StyleSheet, Text, View } from 'react-native';
import { iconName } from '@constant/iconNames';
import Icon from '@components/atmos/icon/icon';

const Accommodation = () => {
	return (
		<View style={styles.accommodation_Container}>
			<View style={styles.accommodation_Content}>
				<Icon iconName={iconName.bed} size={27} />
				<Text>3</Text>
			</View>
			<View style={styles.accommodation_Content}>
				<Icon iconName={iconName.bath} size={27} />
				<Text>2</Text>
			</View>
			<View style={styles.accommodation_Content}>
				<Icon iconName={iconName.car} size={27} />
				<Text>1</Text>
			</View>
			<View style={styles.accommodation_Content}>
				<Icon iconName={iconName.sqMtr} size={27} />
				<Text>500 m</Text>
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
		// backgroundColor: 'pink',
	},
	accommodation_Content: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		gap: 0,
	},
});
