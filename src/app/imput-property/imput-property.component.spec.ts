import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputPropertyComponent } from './imput-property.component';

describe('ImputPropertyComponent', () => {
  let component: ImputPropertyComponent;
  let fixture: ComponentFixture<ImputPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImputPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImputPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
