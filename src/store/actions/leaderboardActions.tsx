import {Users} from '../reducers/types';
import {LeaderboardActionType} from './types';

export const setLeaderboard = (users: Users) => ({
  type: LeaderboardActionType.SET_LEADERBOARD,
  payload: users,
});
