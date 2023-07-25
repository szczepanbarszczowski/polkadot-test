import {
  ActivityIndicator,
  StyleSheet,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
  Platform,
} from 'react-native';
import { FunctionComponent } from 'react';
import { SvgProps } from 'react-native-svg';
import { colors } from '../theme/colors';
import Text from './Text';
import { TypographyTypes } from '../theme/typography';
import { LinearGradient } from 'expo-linear-gradient';

interface ButtonProps extends TouchableHighlightProps {
  buttonType?: 'primary' | 'secondary';
  buttonSize?: 'small' | 'large';
  LeftIcon?: (props: SvgProps) => JSX.Element;
  RightIcon?: (props: SvgProps) => JSX.Element;
  isLoading?: boolean;
  text?: string;
  small?: boolean;
  disabled?: boolean;
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 168,
  },
  buttonWrapper: {
    backgroundColor: colors.blue2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    height: 56,
    borderRadius: 168,
  },
  buttonSmall: {
    height: 48,
  },
  primary: {
    flexDirection: 'row',
  },
  secondary: {
    backgroundColor: colors.gray21,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 28,
    height: 28,
    position: 'absolute',
  },
  leftIcon: {
    left: 12,
  },
  rightIcon: {
    right: 12,
  },
  disabled: {
    backgroundColor: colors.gray23,
  },
  withLeftIcon: {
    justifyContent: 'flex-end',
    paddingRight: 12,
  },
  withRightIcon: {
    justifyContent: 'flex-start',
    paddingLeft: 12,
  },
});

const Button: FunctionComponent<ButtonProps> = ({
  onPress,
  buttonType = 'primary',
  LeftIcon,
  RightIcon,
  text,
  disabled,
  isLoading,
  style,
  small,
}: ButtonProps) => {
  const isPrimary = buttonType === 'primary';
  const Node = Platform.OS === 'ios' ? LinearGradient : View;
  const additionalProps =
    Platform.OS !== 'ios'
      ? {}
      : {
          colors: isPrimary && !disabled ? colors.gradient6.colors : [],
          start: { x: 0.1, y: 0.1 },
          end: { x: 0.9, y: 0.1 },
          locations: isPrimary && !disabled ? colors.gradient6.location : [],
        };

  return (
    <TouchableHighlight
      accessible
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      activeOpacity={0.9}
      style={[styles.buttonContainer, style]}>
      <Node
        style={[
          styles.buttonWrapper,
          isPrimary ? styles.primary : styles.secondary,
          disabled && styles.disabled,
          small && styles.buttonSmall,
          LeftIcon && !isLoading && styles.withLeftIcon,
          RightIcon && !isLoading && styles.withRightIcon,
        ]}
        {...additionalProps}>
        {LeftIcon && !isLoading && (
          <View style={[styles.icon, styles.leftIcon]}>{<LeftIcon />}</View>
        )}

        {isLoading ? (
          <View style={styles.icon}>
            <ActivityIndicator color={colors.white} />
          </View>
        ) : (
          <Text
            color={disabled ? colors.gray18 : colors.white}
            typographyType={TypographyTypes.buttonLarge}>
            {text}
          </Text>
        )}

        {RightIcon && !isLoading && (
          <View style={[styles.icon, styles.rightIcon]}>{<RightIcon />}</View>
        )}
      </Node>
    </TouchableHighlight>
  );
};

export default Button;
