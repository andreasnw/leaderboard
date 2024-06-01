import {ACTIVE_OPACITY, MAX_DISPLAYED_FUZZY_SEARCH} from '@src/constants';
import {colors} from '@src/styles/colors';
import fonts from '@src/styles/fonts';
import spacing from '@src/styles/spacing';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type FuzzySearchProps = {
  fuzzySearch: Array<string> | null;
  onPickFuzzySearch: (item: string) => void;
};

const FuzzySearch = ({fuzzySearch, onPickFuzzySearch}: FuzzySearchProps) => {
  if (!fuzzySearch || fuzzySearch.length === 0) return null;
  return (
    <View style={styles.container}>
      <Text style={[fonts.title, styles.mb]}>Suggestion:</Text>
      {fuzzySearch.map((item, index) => {
        if (index < MAX_DISPLAYED_FUZZY_SEARCH) {
          return (
            <TouchableOpacity
              key={item}
              activeOpacity={ACTIVE_OPACITY}
              style={styles.section}
              onPress={() => onPickFuzzySearch(item)}>
              <Text style={fonts.subtitle}>{item}</Text>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
};

export default FuzzySearch;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 48,
    left: 0,
    right: 0,
    backgroundColor: colors.background,
    padding: spacing.sm,
    borderRadius: 8,
    borderBottomWidth: 4,
    borderBottomColor: colors.primary,
  },
  section: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xs,
  },
  text: {
    color: colors.white,
  },
  mb: {
    marginBottom: spacing.sm,
  },
});
