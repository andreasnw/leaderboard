import {
  populateSearchResult,
  searchUser,
  sortAndAssignRanks,
  sortUser,
} from '@src/utils/helpers';
import {LeaderboardAction, LeaderboardActionType} from '../actions/types';
import {LeaderboardState, Sort} from './types';

const initialState = {
  leaderboard: null,
  searchResult: null,
  rank: null,
  sortBy: 'bananas',
  sort: Sort.ASC,
  search: null,
};

const leaderboardReducer = (
  state: LeaderboardState = initialState,
  action: LeaderboardAction,
) => {
  if (action.type === LeaderboardActionType.SET_RANKS) {
    return {
      ...state,
      rank: sortAndAssignRanks(action.payload),
    };
  }

  if (action.type === LeaderboardActionType.SET_LEADERBOARD) {
    if (state.rank === null) {
      return state;
    }

    const {sortBy, sort, search} = action.payload;

    const sortedUsers = sortUser({rank: state.rank, sortBy, sort});
    const searchResult = searchUser(sortedUsers, search);
    const leaderboard = populateSearchResult(sortedUsers, searchResult);
    const matchedUser =
      searchResult !== null && searchResult > -1 && sortedUsers[searchResult];

    return {
      ...state,
      leaderboard,
      sortBy,
      sort,
      search,
      searchResult: matchedUser,
    };
  }

  return state;
};

export default leaderboardReducer;
