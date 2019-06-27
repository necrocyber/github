import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPerfilComponent } from './detail-perfil.component';

describe('DetailPerfilComponent', () => {
  let component: DetailPerfilComponent;
  let fixture: ComponentFixture<DetailPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
