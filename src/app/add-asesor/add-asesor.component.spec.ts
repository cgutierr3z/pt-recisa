import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAsesorComponent } from './add-asesor.component';

describe('AddAsesorComponent', () => {
  let component: AddAsesorComponent;
  let fixture: ComponentFixture<AddAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAsesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
