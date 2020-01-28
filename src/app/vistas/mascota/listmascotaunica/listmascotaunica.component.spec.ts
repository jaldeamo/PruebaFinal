import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmascotaunicaComponent } from './listmascotaunica.component';

describe('ListmascotaunicaComponent', () => {
  let component: ListmascotaunicaComponent;
  let fixture: ComponentFixture<ListmascotaunicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmascotaunicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmascotaunicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
