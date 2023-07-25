import React, { FunctionComponent } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { colors } from '../theme/colors';
import { typography, TypographyTypes } from '../theme/typography';

export interface TextComponentProps {
  children: React.ReactNode;
  onPress?: () => void;
  typographyType: TypographyTypes;
  color?: string;
  paddingTop?: number;
  paddingBottom?: number;
  paddingRight?: number;
  paddingLeft?: number;
  center?: boolean;
  underline?: boolean;
  strikeThrough?: boolean;
  style?: StyleProp<TextStyle>;
}

const TextComponent: FunctionComponent<TextComponentProps> = ({
  children,
  typographyType,
  color = colors.white,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  center,
  underline,
  strikeThrough,
  style,
  ...rest
}: TextComponentProps) => {
  const typographyStyles = typography[typographyType];

  return (
    <Text
      style={[
        typographyStyles,
        { color, paddingTop, paddingBottom, paddingRight, paddingLeft },
        center && { textAlign: 'center' },
        underline && { textDecorationLine: 'underline' },
        strikeThrough && { textDecorationLine: 'line-through' },
        style,
      ]}
      {...rest}>
      {children}
    </Text>
  );
};

export default TextComponent;
