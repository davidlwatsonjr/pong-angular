import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PongPaddleTrackComponent } from './pong-paddle-track.component';

describe('PongPaddleTrackComponent', () => {
  let component: PongPaddleTrackComponent;
  let fixture: ComponentFixture<PongPaddleTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PongPaddleTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PongPaddleTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
