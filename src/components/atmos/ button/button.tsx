import { colors } from '@constant/colors';
import {Pressable, StyleSheet, Text} from 'react-native';


interface ButtonProps {
  children: React.ReactNode;
  style?: object;
}

const Button: React.FC<ButtonProps> = ({children, style}) => {
  
  
  return (
    <Pressable style={[styles.button, style]}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: colors.primary_blue,
  },
  buttonText: {
    color: colors.primary_white,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
