import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAtendComponent } from './listar-atend.component';

describe('ListarAtendComponent', () => {
  let component: ListarAtendComponent;
  let fixture: ComponentFixture<ListarAtendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAtendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAtendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
