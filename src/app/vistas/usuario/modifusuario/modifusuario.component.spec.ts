import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifusuarioComponent } from './modifusuario.component';

describe('ModifusuarioComponent', () => {
  let component: ModifusuarioComponent;
  let fixture: ComponentFixture<ModifusuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifusuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
