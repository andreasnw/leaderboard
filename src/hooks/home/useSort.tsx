import {RootState} from '@src/store';
import {setLeaderboard} from '@src/store/actions/leaderboardActions';
import {SortBy} from '@src/store/actions/types';
import {Sort} from '@src/store/reducers/types';
import {useDispatch, useSelector} from 'react-redux';

type OnSortPayload = {
  sortByValue?: SortBy;
  sortValue?: Sort;
};

const useSort = () => {
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.search);
  const sort = useSelector((state: RootState) => state.sort);
  const sortBy = useSelector((state: RootState) => state.sortBy) as SortBy;

  const onSort = ({sortByValue, sortValue}: OnSortPayload) => {
    dispatch(
      setLeaderboard({
        search: search ?? '',
        sort: sortValue ?? sort,
        sortBy: sortByValue ?? sortBy,
      }),
    );
  };

  return {
    sortBy,
    onSort,
    sort,
  };
};

export default useSort;
