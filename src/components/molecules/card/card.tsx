import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from '@components/atmos/icon/icon';
import {colors} from '@constant/colors';
import {svgPaths} from '@constant/svgPaths';

interface CardProps {
  iconName: keyof typeof svgPaths;
}

const Card: React.FC<CardProps> = ({iconName}) => {
  return (
    <View>
      <View style={styles.filterContainer}></View>
      <View style={styles.imageContainer}>
        <Image width={100} height={200} />
      </View>
      <View>
        <Text>700000</Text>
        <Text>1/201 Puntt Road, Richmond, VIC 3121</Text>
        <View>
          <Icon iconName={iconName} />
          <Text>3</Text>
        </View>
        <View>
          <View>
            <Text>House</Text>
          </View>
          <View>
            <Icon iconName={iconName} />
            <Icon iconName={iconName} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  filterContainer: {
    height: 70,
    backgroundColor: colors.primary_yellow,
  },
  imageContainer: {
    height: 320,
    width: '100%',
    backgroundColor: colors.primary_red,
  },
});
