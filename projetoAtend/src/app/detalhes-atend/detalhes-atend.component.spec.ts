import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesAtendComponent } from './detalhes-atend.component';

describe('DetalhesAtendComponent', () => {
  let component: DetalhesAtendComponent;
  let fixture: ComponentFixture<DetalhesAtendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesAtendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesAtendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
