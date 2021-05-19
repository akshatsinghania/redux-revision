import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//actions
import { increment, decrement } from './redux/actions';

const App = () => {
	const counter = useSelector((state) => state.counter);
	const isLogged = useSelector((state) => state.isLogged);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>Counter : {counter}</h1>
			<button
				onClick={() => {
					dispatch(increment(5));
				}}>
				+
			</button>
			<button
				onClick={() => {
					dispatch(decrement());
				}}>
				-
			</button>

			<h1>{isLogged ? 'youre logged' : 'your arent logged '}</h1>
		</div>
	);
};

export default App;
