import {MAX_DISPLAYED_TOP_RANKED_USERS} from '@src/constants';
import {Sort, User, Users} from '@src/store/reducers/types';

type SortUser = {
  rank: Array<User>;
  sortBy: keyof User;
  sort: Sort;
};

export const sortAndAssignRanks = (users: Users) => {
  const arrayOfUser = Object.values(users);

  const sortedUsers = [...arrayOfUser].sort((a, b) => {
    let comparison = 0;

    comparison = b.bananas - a.bananas;

    if (comparison === 0) {
      comparison = (a.name as string).localeCompare(b.name as string);
    }

    return comparison;
  });

  return sortedUsers.map((user, index) => {
    return {
      ...user,
      rank: index + 1,
      index,
    };
  });
};

export const sortUser = ({rank, sortBy, sort}: SortUser) => {
  if (sortBy === 'name') {
    return [...rank].sort((a, b) =>
      sort === Sort.ASC
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy]),
    );
  }

  return [...rank].sort((a, b) =>
    sort === Sort.ASC ? a.rank - b.rank : b.rank - a.rank,
  );
};

export const formatNumber = (number: number) => {
  const formatter = new Intl.NumberFormat('en-EN');

  return formatter.format(number);
};

export const populateSearchResult = (
  leaderboard: Array<User>,
  searchResult: number | null,
) => {
  const notFound =
    leaderboard === null ||
    leaderboard.length === 0 ||
    searchResult === null ||
    searchResult === -1;

  if (notFound) {
    return [];
  }

  if (searchResult < MAX_DISPLAYED_TOP_RANKED_USERS) {
    return leaderboard.slice(0, MAX_DISPLAYED_TOP_RANKED_USERS);
  }

  return [
    ...leaderboard.slice(0, MAX_DISPLAYED_TOP_RANKED_USERS - 1),
    leaderboard[searchResult],
  ];
};

export const searchUser = (leaderboard: Array<User>, search: string) => {
  return search === ''
    ? null
    : leaderboard.findIndex(user => search === user.name);
};
