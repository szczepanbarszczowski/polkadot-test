import { Pressable, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TypographyTypes } from '../theme/typography';
import Text from './Text';
import ArrowLeft from './icons/ArrowLeft';
import Cross from './icons/Cross';
import Stepper from './Stepper';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 44,
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  leftContainer: {
    width: 24,
    height: 24,
  },
  centerContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  rightContainer: {
    width: 24,
    height: 24,
  },
});

interface HeaderProps {
  title: string;
  step?: 1 | 2 | 3;
  withCross?: boolean;
  onCrossPress?: () => void;
}

const Header = ({ title, step, withCross, onCrossPress }: HeaderProps) => {
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Pressable onPress={() => goBack()}>
          <ArrowLeft />
        </Pressable>
      </View>
      <View style={styles.centerContainer}>
        {step ? (
          <Stepper step={step} />
        ) : (
          <Text typographyType={TypographyTypes.title2}>{title}</Text>
        )}
      </View>
      <View style={styles.rightContainer}>
        {withCross && (
          <Pressable onPress={onCrossPress}>
            <Cross />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Header;
