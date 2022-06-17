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
    setShowAddPlantForm: (state: IPlantState): IPlantState => ({
      ...state,
      selectedPlant: null,
      showSlideover: true,
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
      showSlideover: true,
    }),
    addNewPlant: (
      state: IPlantState,
      action: PayloadAction<PlantType>
    ): IPlantState => ({
      ...state,
    }),
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      plantsApi.endpoints.getPlants.matchFulfilled,
      (state, { payload }) => {
        state.plants = payload;
      }
    );
  },
});

export const {
  setPlants,
  setShowSlideover,
  setSelectedPlant,
  setShowAddPlantForm,
  addNewPlant,
} = plantSlice.actions;

export const selectPlants = (state: AppState): PlantType[] =>
  state.plant.plants;
export const selectShowSlideover = (state: AppState): boolean =>
  state.plant.showSlideover;
export const selectSelectedPlant = (state: AppState): PlantType | null =>
  state.plant.selectedPlant;

export default plantSlice.reducer;
