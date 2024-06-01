import SearchIcon from '@src/assets/icons/SearchIcon';
import {colors} from '@src/styles/colors';
import icon from '@src/styles/icons';
import spacing from '@src/styles/spacing';
import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Button from './Button';
import FuzzySearch from './FuzzySearch';

interface SearchBarProps {
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
  fuzzySearch: Array<string> | null;
  clearFuzzySearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  placeholder = 'Search',
  onChangeText,
  onSubmit,
  fuzzySearch,
  clearFuzzySearch,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const onPickFuzzySearch = (item: string) => {
    onChangeText(item);
    onSubmit();
    clearFuzzySearch();
  };

  return (
    <View style={[styles.container, styles.centered]}>
      <View
        style={[
          styles.centered,
          styles.field,
          isFocused && styles.focusedContainer,
        ]}>
        <TextInput
          value={value}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={colors.white}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
      <Button
        onPress={onSubmit}
        icon={
          <SearchIcon
            width={icon.size.small}
            height={icon.size.small}
            stroke={colors.secondary}
          />
        }
      />
      <FuzzySearch
        fuzzySearch={fuzzySearch}
        onPickFuzzySearch={onPickFuzzySearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    gap: spacing.sm,
    zIndex: 99,
  },
  field: {
    borderRadius: 8,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
    borderWidth: 1,
    borderColor: colors.white,
    flex: 8,
  },
  focusedContainer: {
    borderColor: colors.primary,
  },
  input: {
    flex: 1,
    marginLeft: spacing.sm,
    color: colors.white,
  },
});

export default SearchBar;
