import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentarProdutoComponent } from './movimentar-produto.component';

describe('MovimentarProdutoComponent', () => {
  let component: MovimentarProdutoComponent;
  let fixture: ComponentFixture<MovimentarProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentarProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovimentarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
