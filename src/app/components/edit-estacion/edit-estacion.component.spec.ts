import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEstacionComponent } from './edit-estacion.component';

describe('EditEstacionComponent', () => {
  let component: EditEstacionComponent;
  let fixture: ComponentFixture<EditEstacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEstacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEstacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
