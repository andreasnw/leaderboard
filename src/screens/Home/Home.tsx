import BaseContainer from '@src/components/Common/BaseContainer';
import SearchBar from '@src/components/Common/SearchBar';
import Leaderboard from '@src/components/Home/Leaderboard';
import useSearchbar from '@src/hooks/home/useSearchbar';

const Home = () => {
  const {onSubmit, onChangeText, fuzzySearch, searchRef, clearFuzzySearch} =
    useSearchbar();

  return (
    <BaseContainer>
      <SearchBar
        onSubmit={onSubmit}
        onChangeText={onChangeText}
        fuzzySearch={fuzzySearch}
        value={searchRef.current}
        clearFuzzySearch={clearFuzzySearch}
      />
      <Leaderboard />
    </BaseContainer>
  );
};

export default Home;
