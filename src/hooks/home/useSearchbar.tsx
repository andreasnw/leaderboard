import {RootState} from '@src/store';
import {setLeaderboard} from '@src/store/actions/leaderboardActions';
import {SortBy} from '@src/store/actions/types';
import {User} from '@src/store/reducers/types';
import {initFuse} from '@src/utils/fuse';
import {IFuseOptions} from 'fuse.js';
import {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const FUZZY_SEARCH_OPTIONS: IFuseOptions<User> = {
  keys: ['name'],
  isCaseSensitive: false,
  includeScore: true,
  threshold: 0.1,
};

const useSearchbar = () => {
  const dispatch = useDispatch();
  const [fuzzySearch, setFuzzySearch] = useState<Array<string> | null>(null);

  const sortBy = useSelector((state: RootState) => state.sortBy) as SortBy;
  const sort = useSelector((state: RootState) => state.sort);
  const rank = useSelector((state: RootState) => state.rank) ?? [];
  const fuse = initFuse(rank, FUZZY_SEARCH_OPTIONS);

  const searchRef = useRef<string>('');

  const onSubmit = () =>
    dispatch(
      setLeaderboard({
        sortBy,
        sort,
        search: searchRef.current,
      }),
    );

  const onChangeText = (text: string) => {
    searchRef.current = text;
    const searchResult = fuse.search(text);

    setFuzzySearch(searchResult.map(result => result.item.name));
  };

  const clearFuzzySearch = () => setFuzzySearch(null);

  return {
    onSubmit,
    searchRef,
    onChangeText,
    fuzzySearch,
    clearFuzzySearch,
  };
};

export default useSearchbar;
