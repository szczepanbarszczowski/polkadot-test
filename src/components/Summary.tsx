import { StyleSheet, View } from 'react-native';
import Card from './Card';
import Text from './Text';
import { TypographyTypes } from '../theme/typography';

const styles = StyleSheet.create({
  contentContainer: {
    width: '100%',
  },
  elementContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#E5E5E5',
    marginVertical: 5,
  },
});

interface SummaryProps {
  amount: string;
  networkFee: string;
  totalAmount: string;
}

const Summary = ({ amount, networkFee }: SummaryProps) => {
  return (
    <Card>
      <View style={styles.contentContainer}>
        <View style={styles.elementContainer}>
          <Text typographyType={TypographyTypes.captionSmallRegular}>Amount</Text>
          <Text typographyType={TypographyTypes.captionSmallRegular}>{amount} WND</Text>
        </View>
        <View style={styles.elementContainer}>
          <Text typographyType={TypographyTypes.captionSmallRegular}>Amount</Text>
          <Text typographyType={TypographyTypes.captionSmallRegular}>{networkFee} WND</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.elementContainer}>
          <Text typographyType={TypographyTypes.captionLargeRegular}>Amount</Text>
          <Text typographyType={TypographyTypes.captionLargeRegular}>{amount} WND</Text>
        </View>
      </View>
    </Card>
  );
};

export default Summary;
