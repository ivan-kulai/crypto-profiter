import { BottomSheet, Button, Input } from '@rneui/base';
import { Text } from '@rneui/themed';
import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './stylesheet';

function OrderInput({ placeholder }: { placeholder: string }) {
  return (
    <Input
      placeholder={placeholder}
      keyboardType="numeric"
      containerStyle={{ width: '40%' }}
      inputStyle={{ color: 'white' }}
      errorStyle={{
        margin: 0,
        fontSize: 0,
      }}
    />
  );
}

export default function AddOrder() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTokenListShown, setIsTokenListShown] = useState(false);
  return (
    <View>
      <BottomSheet
        isVisible={isTokenListShown}
        containerStyle={styles.tokenList}
        onBackdropPress={() => setIsTokenListShown(false)}>
        {[...Array(10)].map(() => (
          <TouchableOpacity style={styles.tokenButton} onPress={() => setIsTokenListShown(false)}>
            <Icon name="bitcoin" color="orange" size={30} />
            <Text h4 bold>
              BTC
            </Text>
            <Text h4 colorSecondary>
              {'(Bitcon)'}
            </Text>
          </TouchableOpacity>
        ))}
      </BottomSheet>

      <TouchableOpacity
        onPress={() => setIsVisible(!isVisible)}
        style={{
          backgroundColor: `${isVisible ? '#640606' : '#16467c'}`,
          ...styles.addButton,
        }}>
        <Icon name={isVisible ? 'times' : 'plus'} color="white" size={20} />
      </TouchableOpacity>

      <View style={{ display: `${isVisible ? 'flex' : 'none'}` }}>
        <View style={styles.input}>
          <Button
            onPress={() => setIsTokenListShown(true)}
            buttonStyle={{
              backgroundColor: 'transparent',
              columnGap: 5,
              padding: 0,
            }}>
            <Icon name="bitcoin" color="orange" size={30} />
            <Icon name="chevron-down" color="grey" size={17} />
          </Button>
          <OrderInput placeholder="Ціна" />
          <OrderInput placeholder="Кількість" />
        </View>
        <Button title="Додати" color="#16467c" containerStyle={{ width: '100%' }} />
      </View>
    </View>
  );
}
