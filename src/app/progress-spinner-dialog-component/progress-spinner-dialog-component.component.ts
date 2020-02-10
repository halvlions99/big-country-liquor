import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-spinner-dialog-component',
  templateUrl: './progress-spinner-dialog-component.component.html',
  styleUrls: ['./progress-spinner-dialog-component.component.scss']
})
export class ProgressSpinnerDialogComponentComponent implements OnInit {
  @Input() show: boolean;

  constructor() { }

  ngOnInit() {
  }

}
