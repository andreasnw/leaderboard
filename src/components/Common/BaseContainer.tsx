import {colors} from '@src/styles/colors';
import spacing from '@src/styles/spacing';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ViewProps,
  View,
} from 'react-native';

const BaseContainer: React.FC<ViewProps> = props => {
  const {children, ...rest} = props;
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View {...rest} style={styles.container}>
        <StatusBar backgroundColor="transparent" barStyle="light-content" />
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  container: {
    padding: spacing.md,
    flex: 1,
  },
});

export default BaseContainer;
