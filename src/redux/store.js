import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slice/app.slice';
import gameReducer from './slice/game.slice';

const store = configureStore({
    reducer: {
        app: appReducer,
        game: gameReducer,
    }
}); 

export default store;