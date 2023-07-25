import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import { colors } from '../theme/colors';
import { TypographyTypes } from '../theme/typography';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 25,
  },
  linesWrapper: {
    gap: 5,
    flexDirection: 'row',
  },
  line: {
    width: 52,
    height: 2,
    backgroundColor: colors.gray21,
    borderRadius: 2,
  },
  activeLine: {
    backgroundColor: colors.green5,
  },
});

interface SecurityLeverProps {
  lever: 1 | 2 | 3;
}

const SecurityLever = ({ lever }: SecurityLeverProps) => {
  const leverString = useMemo(() => {
    switch (lever) {
      case 1:
        return 'Weak';
      case 2:
        return 'Strong';
      case 3:
        return 'Very strong';
    }
  }, [lever]);

  return (
    <View style={styles.container}>
      <Text typographyType={TypographyTypes.paragraphRegular} paddingBottom={16}>
        Security lever: {leverString}
      </Text>
      <View style={styles.linesWrapper}>
        <View style={[styles.line, styles.activeLine]} />
        <View style={[styles.line, lever > 1 && styles.activeLine]} />
        <View style={[styles.line, lever > 2 && styles.activeLine]} />
      </View>
    </View>
  );
};

export default SecurityLever;
