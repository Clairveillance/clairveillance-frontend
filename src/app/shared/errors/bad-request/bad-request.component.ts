import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bad-request',
  templateUrl: './bad-request.component.html',
  styleUrls: ['./bad-request.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadRequestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
