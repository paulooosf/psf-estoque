import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEnderecoComponent } from './criar-endereco.component';

describe('CriarEnderecoComponent', () => {
  let component: CriarEnderecoComponent;
  let fixture: ComponentFixture<CriarEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarEnderecoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
