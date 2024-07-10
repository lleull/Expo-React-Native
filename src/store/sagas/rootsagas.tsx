import { all , fork} from 'redux-saga/effects';
import { watchauthchanger, watchlogin, watchregister, watchsigninuser } from './authsaga/authsaga';
import { WatchAddNewPost } from './postsaga';

export default function* rootSaga() {
  yield all([
    fork(watchregister),
    fork(watchsigninuser),
    fork(WatchAddNewPost)
  ]);
}
