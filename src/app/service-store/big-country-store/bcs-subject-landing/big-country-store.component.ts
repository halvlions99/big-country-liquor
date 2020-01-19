import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-big-country-store',
  templateUrl: './big-country-store.component.html',
  styleUrls: ['./big-country-store.component.scss']
})
export class BigCountryStoreComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navToStore(): void {
    this.router.navigate(['subject-inventory']);
  }
}
