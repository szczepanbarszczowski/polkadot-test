import { ReactNode, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import Text from './Text';
import { TypographyTypes } from '../theme/typography';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 48,
  },
  checkbox: {
    marginRight: 8,
  },
  text: {
    flex: 1,
  },
});

interface CheckBoxProps {
  title: string | ReactNode;
  value?: boolean;
  onChange?: (value: boolean) => void;
}

const CheckboxComponent = ({ title, onChange, value }: CheckBoxProps) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(!!value);

  const handleChange = () => {
    onChange?.(!toggleCheckBox);
    setToggleCheckBox(!toggleCheckBox);
  };

  return (
    <Pressable onPress={handleChange}>
      <View style={styles.container}>
        <Checkbox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={handleChange}
          style={styles.checkbox}
        />
        <Text typographyType={TypographyTypes.title1} style={styles.text}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

export default CheckboxComponent;
