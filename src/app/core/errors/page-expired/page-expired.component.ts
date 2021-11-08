import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-page-expired',
  templateUrl: './page-expired.component.html',
  styleUrls: ['./page-expired.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageExpiredComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
