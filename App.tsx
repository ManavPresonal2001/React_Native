import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottomTab from './src/navigation/bottomTab';
import {StyleSheet} from 'react-native';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;