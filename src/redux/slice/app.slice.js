import { createSlice } from '@reduxjs/toolkit'
import { DEFAULT_CAR_NAME } from '../../config/carConfig'

export const appSlice = createSlice({
  name: 'car-run',
  initialState: {
    selectedCar: DEFAULT_CAR_NAME,
  },
  reducers: {
    setCar: (state, action) => {
        console.log(action);
      state.selectedCar = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCar } = appSlice.actions

export default appSlice.reducer