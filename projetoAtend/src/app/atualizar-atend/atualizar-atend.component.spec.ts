import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarAtendComponent } from './atualizar-atend.component';

describe('AtualizarAtendComponent', () => {
  let component: AtualizarAtendComponent;
  let fixture: ComponentFixture<AtualizarAtendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarAtendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarAtendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
