import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bad-gateway',
  templateUrl: './bad-gateway.component.html',
  styleUrls: ['./bad-gateway.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadGatewayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
