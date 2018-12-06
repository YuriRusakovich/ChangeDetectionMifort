import {ChangeDetectionStrategy, Component, Input, OnInit, OnChanges} from '@angular/core';
import {Counter} from 'src/app/classes/counter';

@Component({
  selector: 'app-change-detection-default',
  templateUrl: './change-detection-default.component.html',
  styleUrls: ['./change-detection-default.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChangeDetectionDefaultComponent implements OnInit, OnChanges {
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
      this.counter ++;
    }, 1000);
  }
}
