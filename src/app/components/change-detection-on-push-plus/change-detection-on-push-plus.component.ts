import {ChangeDetectorRef, Component, Input, OnChanges, OnInit} from '@angular/core';
import {Counter} from '../../classes/counter';

@Component({
  selector: 'app-change-detection-on-push-plus',
  templateUrl: './change-detection-on-push-plus.component.html',
  styleUrls: ['./change-detection-on-push-plus.component.scss']
})
export class ChangeDetectionOnPushPlusComponent implements OnInit, OnChanges {
  counter = 0;
  @Input() inc;
  @Input() setTrigger;
  constructor(private cd: ChangeDetectorRef) { setInterval(() => {
    this.counter++;
    this.cd.markForCheck();
  }, 1000);
  }

  ngOnChanges() {
    this.counter += this.inc;
  }
  ngOnInit() {
  }

}
