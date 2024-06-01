export type UnprocessedUser = {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
};

export interface User extends UnprocessedUser {
  rank: number;
  index: number;
}

export type Users = Record<string, UnprocessedUser>;

export enum Sort {
  ASC = 'asc',
  DESC = 'desc',
}

export type LeaderboardState = {
  leaderboard: Array<User> | null;
  rank: Array<User> | null;
  searchResult: User | null | false;
  sortBy: keyof Users;
  sort: Sort;
  search: string | null;
};
