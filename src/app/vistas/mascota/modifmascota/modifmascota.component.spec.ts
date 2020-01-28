import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifmascotaComponent } from './modifmascota.component';

describe('ModifmascotaComponent', () => {
  let component: ModifmascotaComponent;
  let fixture: ComponentFixture<ModifmascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifmascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifmascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
