import {StyleSheet, View} from 'react-native';
import {LinearGradient} from 'react-native-gradients';

export default function BackgroundGradient({
  colors,
  angle,
}: {
  colors: string[];
  angle: number;
}) {
  const colorList = colors.map((color, idx) => {
    const offset = ((idx + 1) * 100) / colors.length;
    return {offset: String(offset) + '%', color: color, opacity: '1'};
  });

  return (
    <View style={styles.background}>
      <LinearGradient colorList={colorList} angle={angle} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
