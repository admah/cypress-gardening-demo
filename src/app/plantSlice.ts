import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlantType } from '../types';
import { AppState } from './store';
import { plantsApi } from './services/plants';

export interface IPlantState {
  plants: PlantType[];
  showSlideover: boolean;
  selectedPlant: PlantType | null;
}

export const initialState: IPlantState = {
  plants: [],
  showSlideover: false,
  selectedPlant: null,
};

export const plantSlice = createSlice({
  name: 'plant',
  initialState,
  reducers: {
    setPlants: (
      state: IPlantState,
      action: PayloadAction<PlantType[]>
    ): IPlantState => ({
      ...state,
      plants: action.payload,
    }),
    setShowSlideover: (
      state: IPlantState,
      action: PayloadAction<boolean>
    ): IPlantState => ({
      ...state,
      showSlideover: action.payload,
    }),
    setSelectedPlant: (
      state: IPlantState,
      action: PayloadAction<PlantType>
    ): IPlantState => ({
      ...state,
      selectedPlant: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      plantsApi.endpoints.getPlants.matchFulfilled,
      (state, { payload }) => {
        console.log('🚀 ~ file: plantSlice.ts ~ line 48 ~ payload', payload);
        state.plants = payload.plants;
      }
    );
  },
});

export const { setPlants, setShowSlideover, setSelectedPlant } =
  plantSlice.actions;

export const selectPlants = (state: AppState): PlantType[] =>
  state.plant.plants;
export const selectShowSlideover = (state: AppState): boolean =>
  state.plant.showSlideover;

export default plantSlice.reducer;
