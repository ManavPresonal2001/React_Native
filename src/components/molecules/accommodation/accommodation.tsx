import { StyleSheet, Text, View } from 'react-native';
import { iconName } from '@constant/iconNames';
import Icon from '@components/atmos/icon/icon';

const accommodation = () => {
	return (
		<View style={styles.houseContent}>
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
		</View>
	);
};

export default accommodation;

const styles = StyleSheet.create({
	houseContent: {
		flexDirection: 'row',
	},
});
