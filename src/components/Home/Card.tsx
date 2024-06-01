import {StyleSheet, View} from 'react-native';
import {formatNumber} from '@src/utils/helpers';
import {colors} from '@src/styles/colors';
import spacing from '@src/styles/spacing';
import {User} from '@src/store/reducers/types';
import Section from './Section';

type Props = {
  user: User;
  isHighlighted: boolean;
};

const Card = ({isHighlighted, user}: Props) => {
  return (
    <View
      key={user.uid}
      style={[styles.container, isHighlighted && styles.highlight]}>
      <Section
        text={`${user.rank}.`}
        flexShrink
        isHighlighted={isHighlighted}
      />
      <Section text={user.name} flexGrow isHighlighted={isHighlighted} />
      <Section
        text={`${formatNumber(user.bananas)}`}
        flexGrow
        isHighlighted={isHighlighted}
        style={styles.alignRight}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  scrollview: {
    flexGrow: 1,
    marginTop: spacing.md,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderRadius: 8,
    columnGap: spacing.sm,
  },
  alignRight: {
    alignItems: 'flex-end',
  },
  highlight: {
    backgroundColor: colors.primary,
  },
  separator: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    marginBottom: spacing.sm,
  },
});
