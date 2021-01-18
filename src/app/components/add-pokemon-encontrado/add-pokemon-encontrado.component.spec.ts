import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPokemonEncontradoComponent } from './add-pokemon-encontrado.component';

describe('AddPokemonEncontradoComponent', () => {
  let component: AddPokemonEncontradoComponent;
  let fixture: ComponentFixture<AddPokemonEncontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPokemonEncontradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPokemonEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
