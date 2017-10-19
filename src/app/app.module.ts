import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PongPaddleComponent } from './pong-paddle/pong-paddle.component';
import { PongBallComponent } from './pong-ball/pong-ball.component';
import { PongFieldComponent } from './pong-field/pong-field.component';
import { PongPaddleTrackComponent } from './pong-paddle-track/pong-paddle-track.component';

@NgModule({
  declarations: [
    AppComponent,
    PongPaddleComponent,
    PongBallComponent,
    PongFieldComponent,
    PongPaddleTrackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
