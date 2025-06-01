import { Text, StyleSheet } from 'react-native';
import Container from '@components/atmos/container/container';

interface ErrorMessageProps {
	message: string;
}

const Error: React.FC<ErrorMessageProps> = ({ message }) => {
	return (
		<Container style={styles.container}>
			<Text style={styles.errorText}>{message}</Text>
		</Container>
	);
};

export default Error;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	errorText: {
		color: 'red',
		fontSize: 16,
		textAlign: 'center',
	},
});
