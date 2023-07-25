import { StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 44,
    flexDirection: 'row',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.gray21,
  },
  line: {
    width: 96,
    height: 1,
    backgroundColor: colors.gray21,
  },
  active: {
    backgroundColor: colors.primary5,
  },
});

interface StepperProps {
  step: 1 | 2 | 3;
}

const Stepper = ({ step }: StepperProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.dot, styles.active]} />
      <View style={[styles.line, step > 1 && styles.active]} />
      <View style={[styles.dot, step > 1 && styles.active]} />
      <View style={[styles.line, step > 2 && styles.active]} />
      <View style={[styles.dot, step > 2 && styles.active]} />
    </View>
  );
};

export default Stepper;
