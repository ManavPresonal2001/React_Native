import {Pressable, Text, View} from 'react-native';

import {iconName} from '@constant/iconNames';
import { styles } from './style';

import Container from '@components/atmos/container/container';
import Icon from '@components/atmos/icon/icon';
import Button from '@components/atmos/ button/button';

const moreList = [
  {icon: iconName.estimate, name: 'Estimate'},
  {icon: iconName.users, name: 'Find agents'},
  {icon: iconName.auction, name: 'Auction results VIC'},
  {icon: iconName.location, name: 'Loaction profile'},
  {icon: iconName.advice, name: 'Advice'},
  {icon: iconName.news, name: 'News'},
  {icon: iconName.homeLoan, name: 'Home loans'},
  {icon: iconName.contactUs, name: 'Contact Us'},
] as const;

const More = () => {
  return (
    <Container style={styles.container}>
      <View style={styles.header}>
        <Icon iconName={iconName.logo} width="93" height="24" />
        <Button>Join / Sign In</Button>
      </View>

      <View style={styles.moreContentContainer}>
        {moreList.map(data => (
          <Pressable key={data.name} style={styles.moreList}>
            <Icon iconName={data.icon} size={26} />
            <Text style={styles.moreListText}>{data.name}</Text>
          </Pressable>
        ))}
        <Text style={styles.bottomText}>6.8.3 (460)</Text>
      </View>
    </Container>
  );
};

export default More;
