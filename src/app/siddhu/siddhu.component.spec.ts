import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiddhuComponent } from './siddhu.component';

describe('SiddhuComponent', () => {
  let component: SiddhuComponent;
  let fixture: ComponentFixture<SiddhuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiddhuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiddhuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
