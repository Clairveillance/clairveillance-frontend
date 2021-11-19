import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unprocessable-entity',
  templateUrl: './unprocessable-entity.component.html',
  styleUrls: ['./unprocessable-entity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnprocessableEntityComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
