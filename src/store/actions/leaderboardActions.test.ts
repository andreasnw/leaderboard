import {Sort, Users} from '../reducers/types';
import {setLeaderboard, setRanks} from './leaderboardActions';
import {LeaderboardActionType, SetLeaderboardPayload, SortBy} from './types';

describe('Leaderboard Actions', () => {
  it('should create an action to set the ranks', () => {
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
      type: LeaderboardActionType.SET_RANKS,
      payload: users,
    };
    expect(setRanks(users)).toEqual(expectedAction);
  });

  it('should create an action to set the leaderboard', () => {
    const payload: SetLeaderboardPayload = {
      sortBy: SortBy.BANANAS,
      sort: Sort.ASC,
      search: 'John Doe',
    };
    const expectedAction = {
      type: LeaderboardActionType.SET_LEADERBOARD,
      payload: payload,
    };
    expect(setLeaderboard(payload)).toEqual(expectedAction);
  });
});
