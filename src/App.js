import './App.css';
import SelectCar from './components/SelectCar';
import GameLayout from './components/GameLayout';
import { useDispatch } from 'react-redux';
import { moveCar, nextLaneTick } from './redux/slice/game.slice';
import { useEffect, useRef } from 'react';
import ScoreLayout from './components/ScoreLayout';
import ResultLayout from './components/ResultLayout';
import DebugLayout from './components/DebugLayout';

function App() {

	const dispatch = useDispatch()


	const upPressed = () => {
		dispatch(moveCar(-1));
	}

	const downPressed = () => {
		dispatch(moveCar(1));
	}

	const onKeyDown = (event) => {
		let key = event.keyCode;
		if (key == 38 || key == 87) {
			upPressed();
		} else if (key == 40 || key == 83) {
			downPressed();
		}
	}

	useEventListener("keydown", onKeyDown);
	useInterval(()=>{
		dispatch(nextLaneTick())
	}, 50);

	return (
		<div className="App">
			<div className="selectCarSection">
				<SelectCar />
			</div>
			<div className="gameContainer">
				<ScoreLayout />

				<GameLayout />

				<DebugLayout />

				<ResultLayout/>
				<div class="Paddingforlane"/>
				<div class="PaddingforlaneRight"/>
			</div>
		</div>
	);
}



// Hook
function useEventListener(eventName, handler, element = window) {
	// Create a ref that stores handler
	const savedHandler = useRef();

	// Update ref.current value if handler changes.
	// This allows our effect below to always get latest handler ...
	// ... without us needing to pass it in effect deps array ...
	// ... and potentially cause effect to re-run every render.
	useEffect(() => {
		savedHandler.current = handler;
	}, [handler]);

	useEffect(
		() => {
			// Make sure element supports addEventListener
			// On
			const isSupported = element && element.addEventListener;
			if (!isSupported) return;

			// Create event listener that calls handler function stored in ref
			const eventListener = (event) => savedHandler.current(event);

			// Add event listener
			element.addEventListener(eventName, eventListener);

			// Remove event listener on cleanup
			return () => {
				element.removeEventListener(eventName, eventListener);
			};
		},
		[eventName, element] // Re-run if eventName or element changes
	);
}


function useInterval(callback, delay) {
	const savedCallback = useRef();
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	useEffect(
		() => {
			function tick() {
				savedCallback.current();
			}
			if (delay != null) {
				const id = setInterval(tick, delay);
				// Remove event listener on cleanup
				return () => {
					clearInterval();
				}
			}

		},
		[callback, delay] // Re-run if eventName or element changes
	);
}


export default App;
