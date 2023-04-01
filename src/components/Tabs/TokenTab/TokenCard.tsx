import { View } from 'react-native';
import { Text, useTheme } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './stylesheet';

export default function TokenCard() {
  const { theme } = useTheme();
  return (
    <View style={styles.cardContainer}>
      <View style={styles.infoContainer}>
        <Icon name="bitcoin" color="#ef8e19" size={40} />
        <View>
          <Text h6>Bitcoin</Text>
          <View style={styles.info}>
            <Text>28 143,33 USD</Text>
            <Text colorDown>-0.60%</Text>
            <Text>1D</Text>
          </View>
        </View>
      </View>
      <View style={styles.balanceContainer}>
        <View>
          <Text h5 colorSecondary>
            700USD
          </Text>
          <Text h3 bold>
            0.03092₿
          </Text>
        </View>
        <Icon name="long-arrow-alt-up" size={30} color={theme.colors.up} />
        <View style={styles.income}>
          <Text h5 colorSecondary>
            12$
          </Text>
          <Text h3 bold colorUp>
            12%
          </Text>
        </View>
      </View>
    </View>
  );
}
