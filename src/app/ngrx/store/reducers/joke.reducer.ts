import { createReducer, on } from '@ngrx/store';
import { JokeActions } from '../actions';

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

export const jokeReducer = createReducer(
  initialState,
  on(JokeActions.getJoke, state => ({
    ...state,
    isLoading: true
  })),
  on(JokeActions.getJokeSuccess, (state, { joke }) => ({
    ...state,
    isLoading: false,
    joke
  }))
);

export const getLoading = (state: JokeState) => state.isLoading;
export const getErrorMessage = (state: JokeState) => state.errorMessage;
export const getHasError = (state: JokeState) => state.hasError;
export const getJoke = (state: JokeState) => state.joke;
