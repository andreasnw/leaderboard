import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@src/store';
import {useEffect} from 'react';
import {setRanks} from '@src/store/actions/leaderboardActions';
import Users from '@src/services/leaderboard.json';

const useLeaderboard = () => {
  const dispatch = useDispatch();
  const leaderboard = useSelector((state: RootState) => state.leaderboard);
  const searchResult = useSelector((state: RootState) => state.searchResult);
  const search = useSelector((state: RootState) => state.search);

  useEffect(() => {
    dispatch(setRanks(Users));
  }, [dispatch]);

  return {
    leaderboard,
    searchResult,
    search,
  };
};

export default useLeaderboard;
