import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmascotastipoComponent } from './listmascotastipo.component';

describe('ListmascotastipoComponent', () => {
  let component: ListmascotastipoComponent;
  let fixture: ComponentFixture<ListmascotastipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmascotastipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmascotastipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
