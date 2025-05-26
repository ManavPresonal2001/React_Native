import { StyleSheet, View } from 'react-native';
import React from 'react';
import Badge from '@components/atmos/badge/badge';
import Icon from '@components/atmos/icon/icon';
import { iconName } from '@constant/iconNames';

interface CardFooterProps {
	primaryPropertyType: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ primaryPropertyType }) => {
	return (
		<View style={styles.footerContainer}>
			<Badge bagdeText={primaryPropertyType} />

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
	},

	footerIcon: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: 12,
	},
});
