import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TommyComponent } from './tommy.component';

describe('TommyComponent', () => {
  let component: TommyComponent;
  let fixture: ComponentFixture<TommyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TommyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TommyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
