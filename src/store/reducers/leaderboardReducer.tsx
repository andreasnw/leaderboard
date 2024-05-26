import {sortUserByBanana} from '@src/utils/helpers';
import {LeaderboardAction, LeaderboardActionType} from '../actions/types';
import {LeaderboardState} from './types';

const initialState = {
  leaderboard: null,
};

const leaderboardReducer = (
  state: LeaderboardState = initialState,
  action: LeaderboardAction,
) => {
  if (action.type === LeaderboardActionType.SET_LEADERBOARD) {
    const sortedUsers = sortUserByBanana(action.payload);

    return {
      ...state,
      leaderboard: sortedUsers,
    };
  }

  return state;
};

export default leaderboardReducer;
