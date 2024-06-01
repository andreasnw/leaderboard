import {legacy_createStore as createStore} from 'redux';
import leaderboardReducer from './reducers/leaderboardReducer';

const store = createStore(leaderboardReducer);
export type RootState = ReturnType<typeof store.getState>;

export default store;
