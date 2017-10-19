import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PongPaddleComponent } from './pong-paddle.component';

describe('PongPaddleComponent', () => {
  let component: PongPaddleComponent;
  let fixture: ComponentFixture<PongPaddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PongPaddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PongPaddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
