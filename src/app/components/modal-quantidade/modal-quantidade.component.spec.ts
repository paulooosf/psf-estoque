import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalQuantidadeComponent } from './modal-quantidade.component';

describe('ModalQuantidadeComponent', () => {
  let component: ModalQuantidadeComponent;
  let fixture: ComponentFixture<ModalQuantidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalQuantidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalQuantidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
