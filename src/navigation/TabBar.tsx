import { Pressable, StyleSheet, View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Text from '../components/Text';
import { TypographyTypes } from '../theme/typography';
import WalletIcon from '../components/icons/Wallet';
import GearIcon from '../components/icons/Gear';
import { ScreenNames } from './screenNames';
import { colors } from '../theme/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.gray24,
  },
  touchable: {
    flex: 1,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const IconSwitcher = {
  [ScreenNames.Wallet as string]: WalletIcon,
  [ScreenNames.Settings as string]: GearIcon,
};

function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title;
        const Icon = IconSwitcher[route.name];

        const isFocused = state.index === index;

        const onPress = () => {
          navigation.navigate(route.name);
        };

        return (
          <Pressable key={index} onPress={onPress} style={styles.touchable}>
            <Icon width={36} height={36} fill={isFocused ? colors.red4 : colors.gray9} />
            <Text
              typographyType={TypographyTypes.paragraphSemiBold}
              center
              style={{ color: isFocused ? colors.red4 : colors.gray9 }}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export default TabBar;
