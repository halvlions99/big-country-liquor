import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/core/store/liquor-store-interfaces';
import { BigCountryBackendService } from './bcs-subject-backend.service';
import { take, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' }) // Root will initialize this one time
export class BigCountryStoreService {

  constructor(private bigCountryBackendService: BigCountryBackendService) {  }

  // ************************************************************************
  // Private initialized subject allows this to be only be changed via action methods.
  // ************************************************************************
  private readonly _products = new BehaviorSubject<Product[]>([]);
  private readonly _isLoading = new BehaviorSubject<boolean>(false);
  private readonly _hasError = new BehaviorSubject<boolean>(false);
  private readonly _errorMessage = new BehaviorSubject<string>(null);

  // ************************************************************************
  // Selectors here. Mix and match what observables you need to return here.
  // ************************************************************************
  readonly products$ = this._products.asObservable();
  readonly isLoading$ = this._isLoading.asObservable();
  readonly hasError$ = this._hasError.asObservable();
  readonly errorMessage$ = this._errorMessage.asObservable();

  // ************************************************************************
  // Private getters and setters. Easy way to set the subject value.
  // ************************************************************************
  private set products(val: Product[]) {
    this._products.next(val);
  }

  private get products() {
    return this._products.getValue();
  }

  protected get isLoading(): boolean {
    return this._isLoading.value;
  }

  protected set isLoading(val: boolean) {
    this._isLoading.next(val);
  }

  protected get hasError(): boolean {
    return this._hasError.value;
  }

  protected set hasError(val: boolean) {
    this._hasError.next(val);
  }

  protected get errorMessage(): string {
    return this._errorMessage.value;
  }

  protected set errorMessage(val: string) {
    this._errorMessage.next(val);
  }

  // ************************************************************************
  // Create methods that act like actions & effects.
  // ************************************************************************
  clear() {
    this.isLoading = false;
    this.hasError = false;
    this.errorMessage = null;
    this.products = [];
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  removeProduct(productId: Guid): void {
    this.products = this.products.filter(product => product.ProductId !== productId);
  }

  getProductLabel(product: Product): void {
    this.isLoading = true;
    this.bigCountryBackendService.getChuckJoke().pipe(
      take(1),
      map((joke: string) => {
        const productIndex = this.products.findIndex(productData => product.ProductId === productData.ProductId);
        if (productIndex >= 0) {
          this.products[productIndex] = {
            ...product,
            ProductLabel: joke
          };
        }
      }),
      tap(() => (this.isLoading = false))
    ).subscribe();
  }

}
