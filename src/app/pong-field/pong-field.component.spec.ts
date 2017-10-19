import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PongFieldComponent } from './pong-field.component';

describe('PongFieldComponent', () => {
  let component: PongFieldComponent;
  let fixture: ComponentFixture<PongFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PongFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PongFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
