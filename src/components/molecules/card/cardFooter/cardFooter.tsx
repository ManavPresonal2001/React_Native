import { StyleSheet, View } from 'react-native';
import React from 'react';
import Badge from '@components/atmos/badge/badge';
import Icon from '@components/atmos/icon/icon';
import { iconName } from '@constant/iconNames';

const CardFooter = () => {
	return (
		<View style={styles.footerContainer}>
			<Badge bagdeText='House' />

			<View style={styles.footerIcon}>
				<Icon iconName={iconName.share} />
				<Icon iconName={iconName.heart} />
			</View>
		</View>
	);
};

export default CardFooter;

const styles = StyleSheet.create({
	footerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		// backgroundColor: 'pink',
	},

	footerIcon: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: 12,
	},
});
