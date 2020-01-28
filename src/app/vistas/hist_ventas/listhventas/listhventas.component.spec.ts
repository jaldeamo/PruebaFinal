import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListhventasComponent } from './listhventas.component';

describe('ListhventasComponent', () => {
  let component: ListhventasComponent;
  let fixture: ComponentFixture<ListhventasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListhventasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListhventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
