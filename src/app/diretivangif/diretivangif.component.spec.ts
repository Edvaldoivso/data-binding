import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivangifComponent } from './diretivangif.component';

describe('DiretivangifComponent', () => {
  let component: DiretivangifComponent;
  let fixture: ComponentFixture<DiretivangifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivangifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivangifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
