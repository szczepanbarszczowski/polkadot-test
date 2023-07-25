import React, { useCallback, useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import Text from './Text';
import PasswordHidden from './icons/PasswordHidden';
import PasswordVisible from './icons/PasswordVisible';
import { colors } from '../theme/colors';
import { typography, TypographyTypes } from '../theme/typography';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
  },
  wrapper: {
    height: 64,
    borderColor: colors.gray22,
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    ...typography.paragraphSemiBold,
    flex: 1,
    height: 54,
    color: colors.white,
  },
  iconWrapper: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  leftIcon: {
    marginRight: 10,
  },
  leftPadding: {
    paddingLeft: 16,
  },
  rightPadding: {
    paddingRight: 16,
  },
  error: {
    borderColor: colors.red2,
  },
  noteMessage: {
    paddingTop: 6,
    paddingLeft: 16,
  },
});

interface InputProps {
  secureTextEntry?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  LeftIcon?: () => JSX.Element;
  RightIcon?: () => JSX.Element;
  ErrorIcon?: () => JSX.Element;
  label?: string;
  errorMessage?: string;
  style?: any;
  onFocus?: () => void;
  onBlur?: () => void;
  onSubmitEditing?: () => void;
  noteMessage?: string | React.ReactNode;
  multiline?: boolean;
  numberOfLines?: number;
}

const Input = ({
  secureTextEntry,
  value,
  onChange,
  placeholder,
  error,
  disabled,
  LeftIcon,
  RightIcon,
  errorMessage,
  style,
  onFocus,
  onBlur,
  onSubmitEditing,
  noteMessage,
  multiline,
  numberOfLines,
}: InputProps) => {
  const [isTextHidden, changeTextHiddenFlag] = useState(true);

  const toggleTextHiddenFlag = useCallback(() => {
    changeTextHiddenFlag(!isTextHidden);
  }, [isTextHidden]);

  const handleBlur = useCallback(() => {
    onBlur && onBlur();
  }, [onBlur]);

  return (
    <View style={[styles.container, style]}>
      <View
        style={[
          styles.wrapper,
          error && styles.error,
          LeftIcon && styles.leftPadding,
          RightIcon && styles.rightPadding,
        ]}>
        {LeftIcon && <View style={[styles.iconWrapper, styles.leftIcon]}>{LeftIcon()}</View>}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && isTextHidden}
          onChangeText={(text) => onChange?.(text)}
          value={value}
          editable={!disabled}
          onBlur={handleBlur}
          placeholderTextColor={colors.gray12}
          underlineColorAndroid="transparent"
          onSubmitEditing={onSubmitEditing}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />
        {RightIcon && <View style={styles.iconWrapper}>{RightIcon()}</View>}
        {secureTextEntry && (
          <Pressable style={styles.iconWrapper} onPress={toggleTextHiddenFlag}>
            {isTextHidden ? <PasswordHidden /> : <PasswordVisible />}
          </Pressable>
        )}
      </View>
      {!!error && !!errorMessage && (
        <Text
          typographyType={TypographyTypes.captionSmallRegular}
          color={colors.red3}
          style={styles.noteMessage}>
          {errorMessage}
        </Text>
      )}
      {!!noteMessage && (
        <Text
          typographyType={TypographyTypes.captionSmallRegular}
          color={colors.gray12}
          style={styles.noteMessage}>
          {noteMessage}
        </Text>
      )}
    </View>
  );
};

export default Input;
