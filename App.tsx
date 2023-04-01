import { ThemeProvider } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundGradient from './src/UI/BackgroundGradient';
import Balance from './src/components/Balance/Balance';
import Tabs from './src/components/Tabs/Tabs';
import theme from './src/UI/theme';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <ThemeProvider theme={theme}>
          <BackgroundGradient colors={['#425caf', '#244a8f', '#345288', '#392ca8']} angle={150} />
          <Balance />
          <Tabs />
        </ThemeProvider>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#0b0e11',
  },
});
