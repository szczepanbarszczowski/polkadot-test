import { StyleSheet, View } from 'react-native';
import Text from './Text';
import { TypographyTypes } from '../theme/typography';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
});

interface DottedListProps {
  title: string;
  list: string[];
}

const DottedList = ({ title, list }: DottedListProps) => {
  return (
    <View style={styles.container}>
      <Text typographyType={TypographyTypes.paragraphRegular}>{title}</Text>
      {list.map((item, index) => (
        <Text typographyType={TypographyTypes.paragraphRegular} key={`${index}-${item}`}>
          {'\u25CF'} {item}
        </Text>
      ))}
    </View>
  );
};

export default DottedList;
