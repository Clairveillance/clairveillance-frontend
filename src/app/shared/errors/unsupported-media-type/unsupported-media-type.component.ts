import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-unsupported-media-type',
  templateUrl: './unsupported-media-type.component.html',
  styleUrls: ['./unsupported-media-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnsupportedMediaTypeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
