import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';
import {Counter} from '../../classes/counter';

@Component({
  selector: 'app-change-detection-on-push',
  templateUrl: './change-detection-on-push.component.html',
  styleUrls: ['./change-detection-on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionOnPushComponent implements OnInit, OnChanges {
  counter = 0;
  @Input() inc;
  @Input() setTrigger;
  ngOnChanges() {
    this.counter += this.inc;
  }
  ngOnInit() {
    this.utcTime();
  }

  utcTime(): void {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }

}
