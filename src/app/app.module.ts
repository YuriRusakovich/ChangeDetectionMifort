import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChangeDetectionDefaultComponent } from './components/change-detection-default/change-detection-default.component';
import { ChangeDetectionOnPushComponent } from './components/change-detection-on-push/change-detection-on-push.component';
import { ChangeDetectionOnPushPlusComponent } from './components/change-detection-on-push-plus/change-detection-on-push-plus.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeDetectionDefaultComponent,
    ChangeDetectionOnPushComponent,
    ChangeDetectionOnPushPlusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
