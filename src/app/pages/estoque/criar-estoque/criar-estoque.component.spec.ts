import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEstoqueComponent } from './criar-estoque.component';

describe('CriarEstoqueComponent', () => {
  let component: CriarEstoqueComponent;
  let fixture: ComponentFixture<CriarEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarEstoqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
