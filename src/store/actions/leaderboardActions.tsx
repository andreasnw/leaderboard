import {Users} from '../reducers/types';
import {LeaderboardActionType, SetLeaderboardPayload} from './types';

export const setLeaderboard = (payload: SetLeaderboardPayload) => ({
  type: LeaderboardActionType.SET_LEADERBOARD,
  payload,
});

export const setRanks = (payload: Users) => ({
  type: LeaderboardActionType.SET_RANKS,
  payload,
});
