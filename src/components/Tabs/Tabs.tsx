import { Button, ButtonGroup, Text, useTheme } from '@rneui/themed';

import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AddOrder from './OrderTab/AddOrder';
import TokenCard from './TokenTab/TokenCard';
import TabButtons from '../../UI/TabButtons';

export default function Tabs() {
  const { theme } = useTheme();
  const [index, setIndex] = useState(0);
  return (
    <>
      <TabButtons
        style={styles.tabButtons}
        buttons={['Токени', 'Ордери']}
        index={index}
        setIndex={setIndex}
      />
      <View style={styles.tabView}>
        <View
          style={{
            display: `${index === 0 ? 'flex' : 'none'}`,
          }}>
          <TokenCard />
          <TokenCard />
          <TokenCard />
          <TokenCard />
        </View>
        <View
          style={{
            display: `${index === 1 ? 'flex' : 'none'}`,
            minHeight: 30,
          }}>
          <AddOrder />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  tabButtons: {
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  tabView: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#0b0e11',
  },
});
