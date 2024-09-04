import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightBenefitsComponent } from './highlight-benefits.component';

describe('HighlightBenefitsComponent', () => {
  let component: HighlightBenefitsComponent;
  let fixture: ComponentFixture<HighlightBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightBenefitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
