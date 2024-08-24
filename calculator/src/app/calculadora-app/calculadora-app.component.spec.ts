import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraAppComponent } from './calculadora-app.component';

describe('CalculadoraAppComponent', () => {
  let component: CalculadoraAppComponent;
  let fixture: ComponentFixture<CalculadoraAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
