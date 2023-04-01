import { ButtonGroup } from '@rneui/base';
import { useTheme } from '@rneui/themed';

interface TabButtonsProps {
  index: number;
  setIndex: (idx: number) => void;
  buttons: string[];
  style?: {};
}

export default function TabButtons({ style, buttons, index, setIndex }: TabButtonsProps) {
  const { theme } = useTheme();

  return (
    <ButtonGroup
      buttons={buttons}
      selectedIndex={index}
      onPress={(idx) => {
        setIndex(idx);
      }}
      innerBorderStyle={{
        width: 0,
      }}
      textStyle={{
        fontSize: 17,
        color: '#cac8c8',
      }}
      buttonStyle={{
        borderWidth: 0,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
      }}
      containerStyle={{
        backgroundColor: 'transparent',
        borderWidth: 0,
        marginBottom: 0,
        height: 35,
        ...style,
      }}
      selectedButtonStyle={{
        backgroundColor: theme.colors.background,
      }}
    />
  );
}
