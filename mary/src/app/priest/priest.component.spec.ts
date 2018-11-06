import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriestComponent } from './priest.component';

describe('PriestComponent', () => {
  let component: PriestComponent;
  let fixture: ComponentFixture<PriestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
