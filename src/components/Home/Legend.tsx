import fonts from '@src/styles/fonts';
import spacing from '@src/styles/spacing';
import {StyleSheet, Text, View} from 'react-native';

const Legend = () => {
  return (
    <View style={styles.row}>
      <Text style={[fonts.title, styles.flex]}>Rank 🥇</Text>
      <Text style={[fonts.title, styles.flex]}>Name 👨🏻‍💼</Text>
      <Text style={[fonts.title, styles.flex]}>Bananas 🍌</Text>
    </View>
  );
};

export default Legend;

const styles = StyleSheet.create({
  row: {
    marginTop: spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  flex: {
    flexShrink: 1,
  },
});
