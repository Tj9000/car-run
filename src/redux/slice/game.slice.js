import { createSlice } from '@reduxjs/toolkit'
import { CAR_LANE_SIZE, DEFAULT_CAR_NAME } from '../../config/carConfig'
import { MIN_ELEMENT_LENGTH, SEQUENCES } from '../../config/gameConfig';

const initState = {
  carLane: 1,
  score: 0,
  coinsCollected: 0,
  gameOver: false,
  elements: [
    Array(160),
    Array(160),
    Array(160),
  ]
};
export const gameSlice = createSlice({
  name: 'game',
  initialState: initState,
  reducers: {
    playAgain: (state) => {
      Object.assign(state, initState);
    },
    moveCar: (state, action) => {
      let nextlane = state.carLane+action.payload;
      if(nextlane==0 || nextlane==1 || nextlane==2) {
        state.carLane = nextlane;
      }
    },
    nextLaneTick: (state) => {

      if(state.gameOver) {
        return;
      }
      state.elements[0].shift();
      state.elements[1].shift();
      state.elements[2].shift();
      
      for(let i=1; i<CAR_LANE_SIZE;++i) {
        if(state.elements[state.carLane][i]==1) {

          state.elements[state.carLane][i]=0;
          state.coinsCollected += 1;
        }
      }

      for(let i=2; i<CAR_LANE_SIZE;++i) {
        if(state.elements[state.carLane][i]==2) {
          state.gameOver = true
          return;
        }
      }

      state.score += 1;

      if(state.elements && state.elements[0] && state.elements[0].length<MIN_ELEMENT_LENGTH) {
        let toAppend=[
          [],[],[]
        ];
        for(let i=0;i<5;++i) {
          let seq=parseInt(Math.random()*10)%(SEQUENCES.length);
          toAppend[0]=toAppend[0].concat(SEQUENCES[seq][0]);
          toAppend[1]=toAppend[1].concat(SEQUENCES[seq][1]);
          toAppend[2]=toAppend[2].concat(SEQUENCES[seq][2]);
        }
        state.elements[0]=state.elements[0].concat(toAppend[0]);
        state.elements[1]=state.elements[1].concat(toAppend[1]);
        state.elements[2]=state.elements[2].concat(toAppend[2]);
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { moveCar, nextLaneTick, playAgain } = gameSlice.actions

export default gameSlice.reducer