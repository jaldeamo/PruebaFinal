import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmascotastodasComponent } from './listmascotastodas.component';

describe('ListmascotastodasComponent', () => {
  let component: ListmascotastodasComponent;
  let fixture: ComponentFixture<ListmascotastodasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmascotastodasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmascotastodasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
