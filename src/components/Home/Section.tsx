import {colors} from '@src/styles/colors';
import fonts from '@src/styles/fonts';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';

type Props = {
  text: string;
  flexShrink?: boolean;
  flexGrow?: boolean;
  style?: ViewStyle;
  isHighlighted?: boolean;
};

const Section = ({text, flexShrink, flexGrow, style, isHighlighted}: Props) => {
  return (
    <View
      style={[
        styles.container,
        flexGrow && styles.flexGrow,
        flexShrink && styles.flexShrink,
        style,
      ]}>
      <Text style={[fonts.subtitle, isHighlighted && styles.highlight]}>
        {text}
      </Text>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  flexShrink: {
    flexBasis: 'auto',
    flexShrink: 1,
    flexGrow: 0,
  },
  flexGrow: {
    flexGrow: 1,
  },
  highlight: {
    color: colors.secondary,
  },
});
