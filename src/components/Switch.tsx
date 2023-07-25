import { useState } from 'react';
import { StyleSheet, Switch, View } from 'react-native';
import Text from './Text';
import { TypographyTypes } from '../theme/typography';
import { colors } from '../theme/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 48,
  },
});

interface SwitchProps {
  title: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
}

const SwitchComponent = ({ title, onChange, value }: SwitchProps) => {
  const [isEnabled, toggleSwitch] = useState(!!value);

  const handleChange = () => {
    onChange?.(!isEnabled);
    toggleSwitch(!isEnabled);
  };

  return (
    <View style={styles.container}>
      <Text typographyType={TypographyTypes.title1}>{title}</Text>
      <Switch
        trackColor={{ false: colors.gray5, true: colors.primary5 }}
        thumbColor={isEnabled ? colors.white : colors.primary5}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleChange}
        value={isEnabled}
      />
    </View>
  );
};

export default SwitchComponent;
