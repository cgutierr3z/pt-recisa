import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEstacionComponent } from './add-estacion.component';

describe('AddEstacionComponent', () => {
  let component: AddEstacionComponent;
  let fixture: ComponentFixture<AddEstacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEstacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEstacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
