import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendedproductsComponent } from './recomendedproducts.component';

describe('RecomendedproductsComponent', () => {
  let component: RecomendedproductsComponent;
  let fixture: ComponentFixture<RecomendedproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecomendedproductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecomendedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
