import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap, MetaReducer } from '@ngrx/store';


// tslint:disable-next-line:no-empty-interface
export interface State { }

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({  }),
});

export const metaReducers: MetaReducer<State>[] = [];

