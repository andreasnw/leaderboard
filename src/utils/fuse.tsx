import {User} from '@src/store/reducers/types';
import Fuse, {IFuseOptions} from 'fuse.js';

export const initFuse = (list: Array<User>, options: IFuseOptions<User>) =>
  new Fuse(list, options);
