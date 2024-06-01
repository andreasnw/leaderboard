import {colors} from '@src/styles/colors';
import {fontSizes, fontWeights} from '@src/styles/fonts';
import spacing from '@src/styles/spacing';
import React, {ReactNode} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

export enum Variant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  INACTIVE = 'inactive',
}

type ButtonProps = {
  title?: string;
  onPress: () => void;
  variant?: Variant;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle;
  icon?: ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = Variant.PRIMARY,
  style,
  textStyle,
  icon,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.button, styles[variant], style]}>
      {title && (
        <Text
          style={[
            variant === Variant.PRIMARY
              ? styles.textPrimary
              : styles.textSecondary,
            textStyle,
          ]}>
          {title}
        </Text>
      )}
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm,
    borderWidth: 1,
  },
  primary: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  textPrimary: {
    color: colors.secondary,
    fontWeight: fontWeights.semiBold,
    fontSize: fontSizes.medium,
  },
  secondary: {
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderColor: colors.border,
  },
  inactive: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.background,
  },
  textSecondary: {
    color: colors.primary,
    fontWeight: fontWeights.semiBold,
    fontSize: fontSizes.medium,
  },
});

export default Button;
