import {legacy_createStore as createStore} from 'redux';
import leaderboardReducer from './reducers/leaderboardReducer';

const store = createStore(leaderboardReducer);

export default store;
