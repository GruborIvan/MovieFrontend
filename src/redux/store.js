import { createStore,compose } from 'redux';
import rootReducer from './reducers/index';

const store = compose(
    window.devToolsExtention && window.devToolsExtention(),
)(createStore)(rootReducer);

export default store;