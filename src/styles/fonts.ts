import {colors} from './colors';

export const fontSizes = {
  xxs: 10,
  s: 12,
  regular: 14,
  medium: 16,
  l: 18,
  xl: 24,
  xxl: 32,
};

export const fontWeights = {
  light: '200' as '200',
  normal: '400' as '400',
  semiBold: '600' as '600',
  bold: '700' as '700',
  extraBold: '800' as '800',
};

const fonts = {
  title: {
    fontSize: fontSizes.l,
    fontWeight: fontWeights.bold,
    color: colors.white,
  },
  subtitle: {
    fontSize: fontSizes.regular,
    fontWeight: fontWeights.normal,
    color: colors.white,
  },
};

export default fonts;
