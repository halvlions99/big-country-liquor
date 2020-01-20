import { createReducer } from '@ngrx/store';


export const jokeFeatureKey = 'joke';

export interface JokeState {
  joke: string;
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string | null;
}

const initialState: JokeState = {
  joke: '',
  isLoading: false,
  hasError: false,
  errorMessage: null
};

export const reducer = createReducer(
  initialState
);

export const getLoading = (state: JokeState) => state.isLoading;
export const getErrorMessage = (state: JokeState) => state.errorMessage;
export const getHasError = (state: JokeState) => state.hasError;
export const getJoke = (state: JokeState) => state.joke;
