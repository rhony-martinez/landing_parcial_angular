import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicosPorEspecialidad } from './medicos-por-especialidad';

describe('MedicosPorEspecialidad', () => {
  let component: MedicosPorEspecialidad;
  let fixture: ComponentFixture<MedicosPorEspecialidad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicosPorEspecialidad],
    }).compileComponents();

    fixture = TestBed.createComponent(MedicosPorEspecialidad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
