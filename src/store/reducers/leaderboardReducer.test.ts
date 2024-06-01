import {
  LeaderboardActionType,
  LeaderboardAction,
  SortBy,
} from '../actions/types';
import {LeaderboardState, Sort} from '../reducers/types';
import {
  populateSearchResult,
  searchUser,
  sortAndAssignRanks,
  sortUser,
} from '../../utils/helpers';
import leaderboardReducer from './leaderboardReducer';

jest.mock('../../utils/helpers');

const mockSortAndAssignRanks = sortAndAssignRanks as jest.Mock;
const mockSortUser = sortUser as jest.Mock;
const mockSearchUser = searchUser as jest.Mock;
const mockPopulateSearchResult = populateSearchResult as jest.Mock;

describe('leaderboardReducer', () => {
  const initialState: LeaderboardState = {
    leaderboard: null,
    searchResult: null,
    rank: null,
    sortBy: 'bananas',
    sort: Sort.ASC,
    search: null,
  };

  it('should return the initial state when state is undefined', () => {
    const action = {type: 'unknown'} as any;
    const state = leaderboardReducer(undefined, action);
    expect(state).toEqual(initialState);
  });

  it('should handle SET_RANKS action', () => {
    const mockPayload = {
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

    const expectedRank = [
      {
        bananas: 200,
        lastDayPlayed: '2018-11-22',
        longestStreak: 1,
        name: 'Rica Ella Francisco',
        stars: 6,
        subscribed: false,
        uid: '00D1LA8puAa1GINkVpfgC1TmO0m1',
        rank: 1,
        index: 0,
      },
      {
        bananas: 0,
        lastDayPlayed: '2017-11-01',
        longestStreak: 0,
        name: 'Adh Fuoo',
        stars: 4,
        subscribed: false,
        uid: 'x8RNvUgv5pZqDVatEXb2aYgSflq1',
        rank: 2,
        index: 1,
      },
    ];

    mockSortAndAssignRanks.mockReturnValue(expectedRank);

    const action: LeaderboardAction = {
      type: LeaderboardActionType.SET_RANKS,
      payload: mockPayload,
    };

    const expectedState = {
      ...initialState,
      rank: expectedRank,
    };

    const state = leaderboardReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it('should handle SET_LEADERBOARD action', () => {
    const mockPayload = {
      sortBy: SortBy.BANANAS,
      sort: Sort.ASC,
      search: 'Rica',
    };

    const mockSortedUsers = [
      {
        bananas: 200,
        lastDayPlayed: '2018-11-22',
        longestStreak: 1,
        name: 'Rica Ella Francisco',
        stars: 6,
        subscribed: false,
        uid: '00D1LA8puAa1GINkVpfgC1TmO0m1',
        rank: 1,
        index: 0,
      },
      {
        bananas: 0,
        lastDayPlayed: '2017-11-01',
        longestStreak: 0,
        name: 'Adh Fuoo',
        stars: 4,
        subscribed: false,
        uid: 'x8RNvUgv5pZqDVatEXb2aYgSflq1',
        rank: 1,
        index: 0,
      },
    ];
    const mockSearchResult = 0;
    const mockLeaderboard = [
      {
        bananas: 200,
        lastDayPlayed: '2018-11-22',
        longestStreak: 1,
        name: 'Rica Ella Francisco',
        stars: 6,
        subscribed: false,
        uid: '00D1LA8puAa1GINkVpfgC1TmO0m1',
        rank: 1,
        index: 0,
      },
      {
        bananas: 0,
        lastDayPlayed: '2017-11-01',
        longestStreak: 0,
        name: 'Adh Fuoo',
        stars: 4,
        subscribed: false,
        uid: 'x8RNvUgv5pZqDVatEXb2aYgSflq1',
        rank: 2,
        index: 1,
      },
    ];

    mockSortUser.mockReturnValue(mockSortedUsers);
    mockSearchUser.mockReturnValue(mockSearchResult);
    mockPopulateSearchResult.mockReturnValue(mockLeaderboard);

    const action: LeaderboardAction = {
      type: LeaderboardActionType.SET_LEADERBOARD,
      payload: mockPayload,
    };

    const intermediateState: LeaderboardState = {
      ...initialState,
      rank: [
        {
          bananas: 200,
          lastDayPlayed: '2018-11-22',
          longestStreak: 1,
          name: 'Rica Ella Francisco',
          stars: 6,
          subscribed: false,
          uid: '00D1LA8puAa1GINkVpfgC1TmO0m1',
          rank: 1,
          index: 0,
        },
        {
          bananas: 0,
          lastDayPlayed: '2017-11-01',
          longestStreak: 0,
          name: 'Adh Fuoo',
          stars: 4,
          subscribed: false,
          uid: 'x8RNvUgv5pZqDVatEXb2aYgSflq1',
          rank: 2,
          index: 1,
        },
      ],
    };

    const expectedState = {
      ...intermediateState,
      leaderboard: mockLeaderboard,
      sortBy: mockPayload.sortBy,
      sort: mockPayload.sort,
      search: mockPayload.search,
      searchResult: mockSortedUsers[mockSearchResult],
    };

    const state = leaderboardReducer(intermediateState, action);
    expect(state).toEqual(expectedState);
  });
});
