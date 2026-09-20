import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarruselPromociones } from './carrusel-promociones';

describe('CarruselPromociones', () => {
  let component: CarruselPromociones;
  let fixture: ComponentFixture<CarruselPromociones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselPromociones],
    }).compileComponents();

    fixture = TestBed.createComponent(CarruselPromociones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
