import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSecondCompComponent } from './parent-second-comp.component';

describe('ParentSecondCompComponent', () => {
  let component: ParentSecondCompComponent;
  let fixture: ComponentFixture<ParentSecondCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentSecondCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentSecondCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
