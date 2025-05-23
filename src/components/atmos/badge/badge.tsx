import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { responsiveFontSize } from '@utility/index';

interface BadgeText {
	bagdeText: string;
}

const Badge: React.FC<BadgeText> = ({ bagdeText }) => {
	return (
		<View style={styles.badge}>
			<Text style={styles.badgeText}>{bagdeText}</Text>
		</View>
	);
};

export default Badge;

const styles = StyleSheet.create({
	badge: {
		paddingVertical: 2,
		paddingHorizontal: 8,
		backgroundColor: '#F3F3F3FF',
		borderRadius: 5,
	},
	badgeText: {
		fontSize: responsiveFontSize(11),
		fontWeight: '400',
		alignItems: 'center',
	},
});
