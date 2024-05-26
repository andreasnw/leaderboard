import {Users} from '../reducers/types';

export enum LeaderboardActionType {
  SET_LEADERBOARD = 'SET_LEADERBOARD',
}

export type SetLeaderboardAction = {
  type: LeaderboardActionType.SET_LEADERBOARD;
  payload: Users;
};

export type LeaderboardAction = SetLeaderboardAction;
