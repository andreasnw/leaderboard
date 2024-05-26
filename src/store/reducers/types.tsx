export type User = {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
};

export type Users = Record<string, User>;

export type LeaderboardState = {
  leaderboard: Array<User> | null;
};
