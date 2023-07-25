import { StyleSheet, View } from 'react-native';
import Text from './Text';
import { colors } from '../theme/colors';
import { TypographyTypes } from '../theme/typography';

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: colors.gray22,
    width: '100%',
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  big: {
    height: 40,
  },
});

interface TagProps {
  text: string;
  big?: boolean;
}

const Tag = ({ text, big }: TagProps) => {
  return (
    <View style={[styles.container, big && styles.big]}>
      <Text typographyType={TypographyTypes.paragraphRegular}>{text}</Text>
    </View>
  );
};

export default Tag;
