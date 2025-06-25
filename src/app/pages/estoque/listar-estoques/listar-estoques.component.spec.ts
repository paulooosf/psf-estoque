import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEstoquesComponent } from './listar-estoques.component';

describe('ListarEstoquesComponent', () => {
  let component: ListarEstoquesComponent;
  let fixture: ComponentFixture<ListarEstoquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEstoquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarEstoquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
