import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAtendComponent } from './criar-atend.component';

describe('CriarAtendComponent', () => {
  let component: CriarAtendComponent;
  let fixture: ComponentFixture<CriarAtendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarAtendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarAtendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
