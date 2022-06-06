import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAsesorComponent } from './edit-asesor.component';

describe('EditAsesorComponent', () => {
  let component: EditAsesorComponent;
  let fixture: ComponentFixture<EditAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAsesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
