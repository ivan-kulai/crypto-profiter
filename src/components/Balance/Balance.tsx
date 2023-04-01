import { Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import styles from './stylesheet';
// import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Balance() {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.balance}>
          <Text h1 bold>
            780$
          </Text>
        </View>
        <View style={styles.income}>
          {/* <Icon name="long-arrow-alt-up" size={30} color={theme.colors.up} /> */}
          <Text h1 bold colorUp>
            12$
          </Text>
          <Text h3 colorSecondary>
            {'(1.5%)'}
          </Text>
        </View>
      </View>
    </View>
  );
}
