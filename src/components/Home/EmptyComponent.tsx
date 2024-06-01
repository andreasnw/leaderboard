import fonts from '@src/styles/fonts';
import spacing from '@src/styles/spacing';
import {StyleSheet, Text, View} from 'react-native';

const EmptyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={fonts.subtitle}>
        This user name does not exist! Please specify an existing user name!
      </Text>
    </View>
  );
};

export default EmptyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacing.md,
  },
});
