import {Users} from '../reducers/types';
import {setLeaderboard} from './leaderboardActions';
import {LeaderboardActionType} from './types';

describe('Leaderboard Actions', () => {
  it('should create an action to set the leaderboard', () => {
    const users: Users = {
      '00D1LA8puAa1GINkVpfgC1TmO0m1': {
        bananas: 200,
        lastDayPlayed: '2018-11-22',
        longestStreak: 1,
        name: 'Rica Ella Francisco',
        stars: 6,
        subscribed: false,
        uid: '00D1LA8puAa1GINkVpfgC1TmO0m1',
      },
      x8RNvUgv5pZqDVatEXb2aYgSflq1: {
        bananas: 0,
        lastDayPlayed: '2017-11-01',
        longestStreak: 0,
        name: 'Adh Fuoo',
        stars: 4,
        subscribed: false,
        uid: 'x8RNvUgv5pZqDVatEXb2aYgSflq1',
      },
    };
    const expectedAction = {
      type: LeaderboardActionType.SET_LEADERBOARD,
      payload: users,
    };
    expect(setLeaderboard(users)).toEqual(expectedAction);
  });
});
