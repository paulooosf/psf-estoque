import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEnderecosComponent } from './listar-enderecos.component';

describe('ListarEnderecosComponent', () => {
  let component: ListarEnderecosComponent;
  let fixture: ComponentFixture<ListarEnderecosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEnderecosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarEnderecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
