import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Norris } from 'src/app/core/store/liquor-store-interfaces';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BigCountryBackendService {

  constructor(private http: HttpClient) {}

  getChuckJoke(): Observable<string> {
    return this.http.get('http://api.icndb.com/jokes/random').pipe(
      map((response: Norris) => response.value.joke),
      catchError(error => throwError(error.message || 'Error on server'))
    );
  }

}

