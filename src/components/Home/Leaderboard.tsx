import useLeaderboard from '@src/hooks/home/useLeaderboard';
import {Alert, FlatList, StyleSheet} from 'react-native';
import Card from './Card';
import EmptyComponent from './EmptyComponent';
import {useEffect} from 'react';
import Header from './Header';

const Leaderboard = () => {
  const {leaderboard, searchResult, search} = useLeaderboard();

  useEffect(() => {
    if (searchResult === false) {
      Alert.alert(
        'This user name does not exist!',
        'Please specify an existing user name!',
      );
    }
  }, [searchResult, search]);

  return (
    <FlatList
      data={leaderboard}
      ListHeaderComponent={<Header searchResult={searchResult} />}
      ListEmptyComponent={searchResult === false ? <EmptyComponent /> : null}
      renderItem={({item}) => (
        <Card
          user={item}
          isHighlighted={
            searchResult !== false && item.uid === searchResult?.uid
          }
        />
      )}
      keyExtractor={item => item.uid}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      showsVerticalScrollIndicator
      contentContainerStyle={styles.container}
    />
  );
};

export default Leaderboard;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
