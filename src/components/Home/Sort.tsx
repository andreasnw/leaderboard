import fonts from '@src/styles/fonts';
import spacing from '@src/styles/spacing';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useSort from '@src/hooks/home/useSort';
import {SortBy} from '@src/store/actions/types';
import {Sort as SortType} from '@src/store/reducers/types';

import {colors} from '@src/styles/colors';
import Button, {Variant} from '../Common/Button';

const Sort = () => {
  const {sortBy, onSort, sort} = useSort();
  return (
    <View style={styles.margins}>
      <View style={styles.container}>
        <Text style={[fonts.title, styles.title]}>Sort by: </Text>
        <Button
          title="Rank"
          variant={
            sortBy === SortBy.BANANAS ? Variant.PRIMARY : Variant.INACTIVE
          }
          style={[styles.firstOption, styles.buttons]}
          onPress={() => onSort({sortByValue: SortBy.BANANAS})}
        />
        <Button
          title="Name"
          variant={sortBy === SortBy.NAME ? Variant.PRIMARY : Variant.INACTIVE}
          style={[styles.secondOption, styles.buttons]}
          onPress={() => onSort({sortByValue: SortBy.NAME})}
        />
      </View>
      <View style={styles.container}>
        <Text style={[fonts.title, styles.title]}>Sort direction: </Text>
        <TouchableOpacity
          onPress={() =>
            onSort({
              sortValue: sort === SortType.ASC ? SortType.DESC : SortType.ASC,
            })
          }>
          <Text>{sort === SortType.ASC ? '⬇️' : '⬆️'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Sort;

const styles = StyleSheet.create({
  margins: {
    marginTop: spacing.sm,
    rowGap: spacing.sm,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginRight: spacing.sm,
  },
  firstOption: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  secondOption: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  sort: {
    borderRadius: 50,
    padding: spacing.xs,
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
    minWidth: 'auto',
  },
  buttons: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    flex: 0,
  },
});
