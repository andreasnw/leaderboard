import {Sort, User, Users} from '../reducers/types';

export enum LeaderboardActionType {
  SET_RANKS = 'SET_RANKS',
  SET_LEADERBOARD = 'SET_LEADERBOARD',
}

export enum SortBy {
  BANANAS = 'bananas',
  NAME = 'name',
}

export type SetLeaderboardPayload = {
  sortBy: keyof User;
  sort: Sort;
  search: string;
};

export type SetRanksAction = {
  type: LeaderboardActionType.SET_RANKS;
  payload: Users;
};

export type SetLeaderboardAction = {
  type: LeaderboardActionType.SET_LEADERBOARD;
  payload: SetLeaderboardPayload;
};

export type LeaderboardAction = SetLeaderboardAction | SetRanksAction;
