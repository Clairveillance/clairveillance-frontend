import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-gateway-timeout',
  templateUrl: './gateway-timeout.component.html',
  styleUrls: ['./gateway-timeout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GatewayTimeoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
