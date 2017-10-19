import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PongBallComponent } from './pong-ball.component';

describe('PongBallComponent', () => {
  let component: PongBallComponent;
  let fixture: ComponentFixture<PongBallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PongBallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PongBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
