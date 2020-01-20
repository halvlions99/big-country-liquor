import { createAction, props } from '@ngrx/store';

/**
 * Get a chuck norris joke.
 */
export const getJoke = createAction('[Inventory Container] Get Joke Icon Clicked');

/**
 * Get a chuck norris joke success.
 */
export const getJokeSuccess = createAction(
  '[Inventory Container] Get Chucky Joke Success',
  props<{ joke: string }>()
);

/**
 * Get a chuck norris joke success.
 */
export const getJokeFailed = createAction(
  '[Inventory Container] Get Chucky Joke Failed',
  props<{ errorMessage: string }>()
);
