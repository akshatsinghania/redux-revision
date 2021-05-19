//redux
import { combineReducers } from 'redux';
//reducers
import counter from './counter';
import logged from './isLogged';

const reducers = combineReducers({
	counter: counter,
	isLogged: logged,
});
export default reducers;
