import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-service-unavailable',
  templateUrl: './service-unavailable.component.html',
  styleUrls: ['./service-unavailable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceUnavailableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
