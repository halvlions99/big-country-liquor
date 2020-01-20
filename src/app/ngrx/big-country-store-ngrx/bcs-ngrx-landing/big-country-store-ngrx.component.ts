import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-big-country-store-ngrx',
  templateUrl: './big-country-store-ngrx.component.html',
  styleUrls: ['./big-country-store-ngrx.component.scss']
})
export class BigCountryStoreNgrxComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navToStore(): void {
    this.router.navigate(['ngrx-inventory']);
  }

}
