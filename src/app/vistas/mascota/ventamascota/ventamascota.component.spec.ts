import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentamascotaComponent } from './ventamascota.component';

describe('VentamascotaComponent', () => {
  let component: VentamascotaComponent;
  let fixture: ComponentFixture<VentamascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentamascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentamascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
