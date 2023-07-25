import { useSelector } from 'react-redux';
import { selectPair } from '../store/auth';
import useBalance from '../hooks/useBalance';
import { useTruncateFromMiddle } from '../hooks/useTruncateFromMiddle';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import { TypographyTypes } from '../theme/typography';
import Profile from './icons/Profile';
import { colors } from '../theme/colors';

const styles = StyleSheet.create({
  container: { flexDirection: 'row', gap: 10 },
});

const AccountPicker = ({ withoutFrom }: { withoutFrom?: boolean }) => {
  const pair = useSelector(selectPair);
  const balance = useBalance();
  const addr = useTruncateFromMiddle({
    fullStr: pair?.address || '',
    strLen: 10,
  });

  return (
    <View>
      {!withoutFrom && (
        <Text
          paddingTop={20}
          paddingBottom={20}
          typographyType={TypographyTypes.captionLargeSemiBold}>
          From
        </Text>
      )}
      <View style={styles.container}>
        <Profile />
        <View>
          <Text typographyType={TypographyTypes.title1}>Account 1</Text>
          <Text typographyType={TypographyTypes.captionLargeSemiBold} paddingBottom={10}>
            {addr}
          </Text>
          <Text typographyType={TypographyTypes.captionLargeRegular} color={colors.gray16}>
            Balance: {balance}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AccountPicker;
