import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonEncontradosComponent } from './pokemon-encontrados.component';

describe('PokemonEncontradosComponent', () => {
  let component: PokemonEncontradosComponent;
  let fixture: ComponentFixture<PokemonEncontradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonEncontradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonEncontradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
