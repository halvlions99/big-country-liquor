import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BigCountryBackendService } from 'src/app/service-store/store/bcs-subject-backend.service';

import { JokeActions } from '../actions';


@Injectable()
export class JokeEffects {

  getChuckyJoke$: Observable<Action> = createEffect(
    () => this.actions$.pipe(
      ofType(JokeActions.getJoke),
      mergeMap(action => {
          return this.bigCountryBackendService.getChuckJoke().pipe(
            map(jokeData => JokeActions.getJokeSuccess({ joke: jokeData })),
            catchError(error => of(JokeActions.getJokeFailed({ errorMessage: 'error' })))
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private bigCountryBackendService: BigCountryBackendService
  ) {}

}
