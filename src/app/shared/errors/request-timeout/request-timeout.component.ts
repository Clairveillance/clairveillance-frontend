import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-request-timeout',
  templateUrl: './request-timeout.component.html',
  styleUrls: ['./request-timeout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestTimeoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
