import {Users} from '@src/store/reducers/types';

export const sortUserByBanana = (payload: Users) => {
  const users = Object.values(payload);
  return [...users].sort((a, b) => b.bananas - a.bananas);
};
