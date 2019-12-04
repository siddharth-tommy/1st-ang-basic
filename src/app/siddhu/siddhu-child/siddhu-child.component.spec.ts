import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiddhuChildComponent } from './siddhu-child.component';

describe('SiddhuChildComponent', () => {
  let component: SiddhuChildComponent;
  let fixture: ComponentFixture<SiddhuChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiddhuChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiddhuChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
