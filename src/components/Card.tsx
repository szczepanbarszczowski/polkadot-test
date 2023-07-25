import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderColor: colors.gray21,
    borderWidth: 1,
    padding: 24,
    width: '100%',
  },
});

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default Card;
