import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentFirstCompComponent } from './parent-first-comp.component';

describe('ParentFirstCompComponent', () => {
  let component: ParentFirstCompComponent;
  let fixture: ComponentFixture<ParentFirstCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentFirstCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentFirstCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
