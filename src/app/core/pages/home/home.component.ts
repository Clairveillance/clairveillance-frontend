import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  OnDestroy,
  Component,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener<'change'>(
      'change',
      this.mobileQueryListener
    );
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener<'change'>(
      'change',
      this.mobileQueryListener
    );
  }
}
