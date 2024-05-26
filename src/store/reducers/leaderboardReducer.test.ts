import {setLeaderboard} from '../actions/leaderboardActions';
import leaderboardReducer from './leaderboardReducer';
import {LeaderboardState} from './types';

test('should handle setting up a list of sorted users to leaderboard', () => {
  const previousState: LeaderboardState = {leaderboard: null};

  expect(
    leaderboardReducer(
      previousState,
      setLeaderboard({
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
      }),
    ),
  ).toEqual({
    leaderboard: [
      {
        bananas: 200,
        lastDayPlayed: '2018-11-22',
        longestStreak: 1,
        name: 'Rica Ella Francisco',
        stars: 6,
        subscribed: false,
        uid: '00D1LA8puAa1GINkVpfgC1TmO0m1',
      },
      {
        bananas: 0,
        lastDayPlayed: '2017-11-01',
        longestStreak: 0,
        name: 'Adh Fuoo',
        stars: 4,
        subscribed: false,
        uid: 'x8RNvUgv5pZqDVatEXb2aYgSflq1',
      },
    ],
  });
});
